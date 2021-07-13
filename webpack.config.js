const HtmlWebpackPlugin = require('html-webpack-plugin')

const root = __dirname

module.exports = {
  mode: 'development',
  entry: `${root}/src/index.js`,
  output: {
    chunkFilename: '[name].bundle.js',
    filename: '[name].bundle.js',
    path: `${root}/dist`,
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: `${root}/dist`,
    compress: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
    stats: 'minimal',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${root}/src/index.html`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
      },
    ],
  },
}
