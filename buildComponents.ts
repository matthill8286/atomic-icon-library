/* eslint-disable no-console */
import svgr from '@svgr/core'
import rimraf from 'rimraf'
import fse from 'fs-extra'
import { promisify } from 'util'
import glob from 'glob'
import { queue } from 'async'
import path from 'path'
import prettier from 'prettier'
import SVGO from 'svgo'
import { render } from 'mustache'
import { BuildOptions } from './build'

const globAsync = promisify(glob)
const svgo = new SVGO()

export const toPascalCase = (text: string) => {
  return text.replace(/(^\w|-\w)/g, clearAndUpper)
}

export const clearAndUpper = (text: string) => {
  return text.replace(/-/, '').toUpperCase()
}

/**
 * Generates index file where all components default is converted into named
 * @param options Build Options
 */
export const generateIndex = async (options: BuildOptions) => {
  const files = await globAsync(path.join(options.outputDir, '**/*.tsx'))
  const index = files
    .map((file: string) => {
      const typename = path.basename(file).replace('.tsx', '')
      const filePath = file.replace('src/components/', '').replace('.tsx', '')
      return `export { default as ${typename} } from './${filePath}'\n`
    })
    .join('')
  await fse.writeFile(path.join(options.outputDir, 'index.ts'), index)
}

/**
 * returns a pascal cased filename with last folder as prefix
 * @param svgName name of the raw svg file
 * @param outputFileDir output dir
 */
export const getFileName = (svgName: string, outputFileDir: string) => {
  // e.g. Mm
  const filePrefix = outputFileDir.match(/([^/]*)\/*$/)?.[1]
  return `${toPascalCase(`${filePrefix}-${svgName}`)}.tsx`
}

/**
 * Extract Paths from svg and filters out unwanted stuff like color
 * @param data raw svg data
 */
export async function extractPaths(data: string) {
  const input = data.replace(/ fill="#999999"/g, '')
  const result = await svgo.optimize(input)

  // Extract the paths from the svg string
  let paths = result.data
    .replace(/<svg[^>]*>/g, '')
    .replace(/<\/svg>/g, '')
    .replace(/"\/>/g, '" />')
    .replace(/fill-opacity=/g, 'fillOpacity=')
    .replace(/xlink:href=/g, 'xlinkHref=')
    .replace(/clip-rule=/g, 'clipRule=')
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/fill=/g, 'fill=')
    .replace(/ clip-path=".+?"/g, '')
    .replace(/<clipPath.+?<\/clipPath>/g, '')

  // in case the extracted path contains no wrapper element
  if ((paths.match(/\/>/g) || []).length > 1) {
    paths = `<React.Fragment>${paths}</React.Fragment>`
  }

  // in case icon is too big we need to scale it down
  if (data.match(/viewBox="0 0 48 48"/g)) {
    paths = paths.replace(/<path /g, '<path transform="scale(0.5, 0.5)" ')
  }

  return paths
}

/**
 * checks wether the icon exists for content intelligence
 * then renders the multi product line icon
 * if it does not exist it takes the filtered one (default)
 * @param fileData the raw svg data
 * @param outputFileDir output file dir
 * @param svgPath input file path
 * @param componentTemplate the mustache template
 */
export const getProductLineComponent = async (
    fileData: string,
    outputFileDir: string,
    svgPath: string,
    componentTemplate: string
) => {
  const filteredExtractedPaths = await extractPaths(fileData)
  let danoneExtractedPaths = null
  // apply content path to the template if content icon exits
  try {
    const contentFilePath = svgPath.replace('/filtered/', '/content/')
    const contentSvgExists = await fse.pathExists(contentFilePath)
    if (contentSvgExists) {
      const contentFileData = await fse.readFile(contentFilePath, { encoding: 'utf8' })
      danoneExtractedPaths = await extractPaths(contentFileData)
    }
  } catch (error) {
    console.log('CONTENT Svg could not be applied', error)
  }

  danoneExtractedPaths = danoneExtractedPaths ? danoneExtractedPaths : filteredExtractedPaths

  return render(componentTemplate, {
    filteredExtractedPaths,
    danoneExtractedPaths,
  })
}

export const worker = async (
  svgPath: string,
  componentTemplate: string,
  options: BuildOptions,
  prettierConfig: prettier.Options | null
) => {
  // e.g. svgs/components/common/logos/AppleLogo.tsx
  const normalizedSvgPath = path.normalize(svgPath)
  // holds info about dir, filename, etc
  const svgPathObj = path.parse(normalizedSvgPath)
  // e.g. logos/ (we strip unneeded folders away)
  const innerDestPath = svgPathObj.dir
    .replace(options.svgBaseDir, '')
    .replace(/(common\/|filtered\/)/g, '')
  // e.g. src/components/common/logos
  const outputFileDir = path.join(options.outputDir, innerDestPath)
  // e.g. AppleLogo.tsx
  const fileName = getFileName(svgPathObj.name, outputFileDir)
  // e.g. src/components/common/logos/AppleLogo.tsx
  const outputFilePath = path.join(outputFileDir, fileName)
  const outputDirExists = await fse.pathExists(outputFileDir)
  const fileData = await fse.readFile(svgPath, { encoding: 'utf8' })
  let componentString = ''
  // render product line specific styleguide icons with mustache template
  if (innerDestPath.includes('styleguide')) {
    componentString = await getProductLineComponent(
      fileData,
      outputFileDir,
      svgPath,
      componentTemplate
    )
  } else {
    // render commmon svg components with svgr
    const svgData = await svgo.optimize(fileData)
    componentString = await Promise.resolve(
      svgr(svgData.data, { typescript: true, memo: true }, { componentName: 'SvgComponent' })
    )
  }

  if (!outputDirExists) {
    fse.mkdirpSync(outputFileDir)
  }

  if (!prettierConfig) {
    throw new Error('No prettier config file found, please adjust the path.')
  }
  const pretty = prettier.format(componentString, prettierConfig)
  await fse.writeFile(outputFilePath, pretty)
  return outputFilePath
}

/**
 * Converts SVG files into react components
 * @param options filepaths, etc.
 */
export const buildComponents = async (options: BuildOptions) => {
  const prettierConfig = await Promise.resolve(prettier.resolveConfig(options.prettierConfigPath))

  rimraf.sync(`${options.outputDir}/*.tsx`)
  const outputDirExists = await fse.pathExists(options.outputDir)
  if (!outputDirExists) {
    await fse.mkdir(options.outputDir)
  }

  // read all the SVG paths and process them in parallel
  const [svgPaths, componentTemplate] = await Promise.all([
    globAsync(options.svgFilter),
    fse.readFile(path.join(__dirname, options.templateFile), {
      encoding: 'utf8',
    }),
  ])
  const q = queue(async function (
    svgPath: string,
    callback: (svgPath: string, outputFilePath: string) => void
  ) {
    if (svgPath) {
      const outputFilePath = await worker(svgPath, componentTemplate, options, prettierConfig)
      callback(svgPath, outputFilePath)
    }
  },
  8)
  q.push(svgPaths, (path?: string | null, outputFilePath?: string) => {
    console.log(path, ' => ', outputFilePath)
  })
  q.drain(function () {
    console.log('Itemcount: ', svgPaths.length)
    generateIndex(options)
  })
}
