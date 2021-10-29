// jest.config.js
module.exports = {
  verbose: true,
  moduleDirectories: ['node_modules', '<rootDir>/src/'],
  testURL: 'http://localhost',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': ['babel-jest', { cwd: __dirname, configFile: './babel-jest.config.json' }],
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$', '<rootDir>/dist/'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  modulePathIgnorePatterns: ['<rootDir>/documentation/', '<rootDir>/dist/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'mjs', 'node'],
}
