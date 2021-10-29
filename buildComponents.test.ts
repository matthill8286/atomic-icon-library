import fs from 'fs'
import path from 'path'
import temp from 'temp'
import prettier from 'prettier'
import { buildComponents, worker, toPascalCase, generateIndex } from './buildComponents'
import Mustache from 'mustache'

Mustache.render = jest.fn().mockImplementation(() => '')

describe('Components builder', () => {
  beforeEach(() => {
    temp.track()
  })

  describe('component name', () => {
    it('converts kebab to pascal case', () => {
      const kebab = 'kebab-component-case'
      expect(toPascalCase(kebab)).toEqual('KebabComponentCase')
    })
  })
  describe('buildComponents', () => {
    const options = {
      svgBaseDir: 'mocks/svgs',
      svgFilter: 'mocks/svgs/*(common|filtered)/**/*.svg',
      outputDir: '',
      templateFile: 'ComponentTemplate.txt',
      prettierConfigPath: '.prettierrc.js',
    }
    beforeEach(() => {
      options.outputDir = temp.mkdirSync()
    })

    afterEach(() => {
      temp.cleanupSync()
    })
    it('the build functions should be defined', () => {
      expect(typeof buildComponents).toBe('function')
      expect(typeof worker).toBe('function')
    })

    if (process.env.DPBUILD) {
      it('outputs to the correct directory and filename for the a common svg', async () => {
        const prettierConfig = await Promise.resolve(
          prettier.resolveConfig(options.prettierConfigPath)
        )
        await worker(
          'mocks/svgs/common/other/arrow-pick.svg',
          options.templateFile,
          options,
          prettierConfig
        )
        expect(fs.lstatSync(options.outputDir).isDirectory()).toBe(true)
        expect(fs.lstatSync(`${options.outputDir}/other/OtherArrowPick.tsx`).isFile()).toBe(true)
      })
      it('outputs to the correct filename for a product line (styleguide) svg', async () => {
        const prettierConfig = await Promise.resolve(
          prettier.resolveConfig(options.prettierConfigPath)
        )
        await worker(
          'mocks/svgs/filtered/styleguide/add.svg',
          options.templateFile,
          options,
          prettierConfig
        )
        expect(fs.lstatSync(`${options.outputDir}/styleguide/StyleguideAdd.tsx`).isFile()).toBe(
          true
        )
      })
      it('outputs the correct react component for a common component', async () => {
        const prettierConfig = await Promise.resolve(
          prettier.resolveConfig(options.prettierConfigPath)
        )
        await worker(
          'mocks/svgs/common/other/arrow-pick.svg',
          options.templateFile,
          options,
          prettierConfig
        )
        const actualOutput = fs.readFileSync(`${options.outputDir}/other/OtherArrowPick.tsx`, {
          encoding: 'utf8',
        })
        const expectedOutput = fs.readFileSync('mocks/snapshots/other/OtherArrowPick.tsx', {
          encoding: 'utf8',
        })
        expect(actualOutput).toContain(expectedOutput)
      })
      it('outputs the correct index file', async () => {
        const prettierConfig = await Promise.resolve(
          prettier.resolveConfig(options.prettierConfigPath)
        )
        await worker(
          'mocks/svgs/common/other/arrow-pick.svg',
          options.templateFile,
          options,
          prettierConfig
        )
        await generateIndex(options)
        const outPutIndex = fs.readFileSync(path.join(options.outputDir, 'index.ts'), {
          encoding: 'utf8',
        })
        const expected = `export { default as OtherArrowPick } from './${options.outputDir}/other/OtherArrowPick'`
        expect(outPutIndex).toContain(expected)
      })
    }
  })
})
