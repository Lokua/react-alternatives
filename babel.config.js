module.exports = (api) => {
  api.cache(true)

  return {
    presets: ['@babel/preset-env'],
    plugins: [
      [
        'babel-plugin-transform-react-jsx',
        {
          pragma: 'h',
        },
      ],

      // [
      //   'babel-plugin-jsx-pragmatic',
      //   {
      //     module: './src/step-4/lib',
      //     import: 'h',
      //   },
      // ],
    ],
  }
}
