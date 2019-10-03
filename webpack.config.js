const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv')
  .config({ path: __dirname + '/.env'});
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['react-hot-loader/patch', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  devServer: {
    publicPath: '/'
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'public/index.html'
    }),
    new webpack.EnvironmentPlugin({
      KEY: dotenv.parsed.GOOGLE_API_KEY
    }),
    new CleanWebpackPlugin()
  ]
};