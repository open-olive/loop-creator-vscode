//@ts-check

'use strict';

const path = require('path');
const { DefinePlugin, BannerPlugin } = require('webpack');

/**@type {import('webpack').Configuration}*/
const config = {
  target: 'node',
  mode: 'production',
  entry: './src/index.ts',
  optimization: {
    minimize: false,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  devtool: 'nosources-source-map',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      __GOOGLE_ANALYTICS_ID__: process.env.GOOGLE_ANALYTICS_ID ? 
        // This is a code injection, so it needs to be defined as a string with the quotes
        `\'${process.env.GOOGLE_ANALYTICS_ID}\'` : 
        undefined,
      __ENVIRONMENT__: process.env.ENVIRONMENT ? 
        `\'${process.env.ENVIRONMENT}\'` :
        '\'dev\''
    }),
    new BannerPlugin({ banner: '#!/usr/bin/env node', raw: true })
  ],
};

module.exports = config;
