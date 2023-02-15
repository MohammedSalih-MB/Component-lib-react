const webpack = require('webpack');
const path = require('path');

require('dotenv').config();

const config = {
  output: {
    chunkFilename: '[name].js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }, // translates CSS into CommonJS
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: { config: './config/postcss.config.js' },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }, // translates CSS into CommonJS
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: { config: './config/postcss.config.js' },
            },
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
      }
    ],
  },

  resolve: {
    alias: {
      '@Root': path.resolve(__dirname, '../../src/'),
      '@Components': path.resolve(__dirname, '../../src/components'),
    },
    extensions: ['.js', '.jsx', '.css', '.scss', '.json'],
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      ENV: process.env.ENV || 'development'
    })
  ],
};

module.exports = config;