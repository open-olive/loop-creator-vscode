//@ts-check

'use strict';

const path = require('path');
const commonConfig = require('./webpack.common.config');

/**@type {import('webpack').Configuration}*/
const config = {
  target: 'node', // vscode extensions run in a Node.js-context 📖 -> https://webpack.js.org/configuration/node/
  mode: 'none', // this leaves the source code as close as possible to the original (when packaging we set this to 'production')
  output: {
    // the bundle is stored in the 'dist' folder (check package.json), 📖 -> https://webpack.js.org/configuration/output/
    path: path.resolve(__dirname, '../', 'dist'),
    filename: 'extension.js',
    libraryTarget: 'commonjs2',
  },
  ...commonConfig,
};

module.exports = config;
