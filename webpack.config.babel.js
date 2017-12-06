const babelLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {loader: 'babel-loader'}
}
module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {rules: [babelLoader]},
  resolve: {extensions: ['.js']},
  devtool: 'source-map',
  devServer: {
    port: 5050,
    historyApiFallback: true,
    open: true,
    contentBase: './',
    watchOptions: {ignored: /node_modules/}
  }
}
