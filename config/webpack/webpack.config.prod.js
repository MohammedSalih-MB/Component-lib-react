const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineSourcePlugin = require('html-webpack-inline-source-plugin');
const { merge } = require('webpack-merge');

const webpackConfig = require('./webpack.config.common');

const buildPath = path.resolve(__dirname, '../../dist/');

const prodConfig = merge(webpackConfig, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: buildPath,
    filename: 'index.js',
    publicPath: '/',
    library: 'gmm-components',
    libraryTarget: 'commonjs'
  },
  entry: {
    app: './src/index.js',
  },
  optimization: {
    nodeEnv: 'production'
  }
});

module.exports = prodConfig;
