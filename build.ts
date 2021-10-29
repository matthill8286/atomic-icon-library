import { buildComponents } from './buildComponents'

export interface BuildOptions {
  svgBaseDir: string
  svgFilter: string
  outputDir: string
  templateFile: string
  prettierConfigPath: string
}

const options: BuildOptions = {
  svgBaseDir: 'svgs',
  svgFilter: 'svgs/*(common|filtered)/**/*.svg',
  outputDir: 'src/components',
  templateFile: 'src/utils/ComponentTemplate.txt',
  prettierConfigPath: '.prettierrc.js',
}

buildComponents(options)
