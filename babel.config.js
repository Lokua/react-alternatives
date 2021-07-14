module.exports = (api) => {
  api.cache(true)

  return {
    presets: ['@babel/preset-env'],
    // plugins: [
    //   '@babel/plugin-proposal-class-properties',
    //   [
    //     'babel-plugin-module-resolver',
    //     {
    //       alias: {
    //         '^\\$+(.+)': `${process.cwd()}/src/\\1`,
    //       },
    //     },
    //   ],
    // ],
    // env: {
    //   development: {
    //     compact: false,
    //   },
    // },
  }
}
