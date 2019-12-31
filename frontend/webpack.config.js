const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv')
  .config({ path: __dirname + '/.env'});
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const ENV = process.env.NODE_ENV === 'development' ? 'development' : 'production';

module.exports = {
  mode: ENV,
  entry: ['react-hot-loader/patch', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_moudles[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
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
    publicPath: '/',
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'public/index.html',
      favicon: 'public/img/favicon.png'
    }),
    new webpack.EnvironmentPlugin({
      KEY: dotenv.parsed.GOOGLE_API_KEY,
      ENV
    }),
    new CleanWebpackPlugin(),
    new ManifestPlugin({
      fileName: 'manifest.json',
      basePath: '/'
    }),
    new LodashModuleReplacementPlugin,
  ]
};