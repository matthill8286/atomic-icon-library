module.exports = function (api) {
  api.cache.using(() => process.env.NODE_ENV)
  const presets = [
    [
      '@babel/preset-env',
      {
        modules: process.env.BABEL_ENV === 'build' ? false : 'auto',
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        development: process.env.BABEL_ENV !== 'build',
      },
    ],
  ]
  return {
    presets,
  }
}
