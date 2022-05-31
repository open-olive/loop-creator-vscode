/* eslint-disable @typescript-eslint/naming-convention */
'use strict';
const path = require('path');
const webpack = require('webpack');
const commonConfig = require('./webpack.common.config');

const { resolve: commonResolve } = commonConfig;
const resolve = {
  mainFields: ['browser', 'module', 'main'], // look for `browser` entry point in imported node modules
  fallback: {
    // Webpack 5 no longer polyfills Node.js core modules automatically.
    // see https://webpack.js.org/configuration/resolve/#resolvefallback
    // for the list of Node.js core module polyfills.
    assert: false,
    buffer: require.resolve('buffer'),
    constants: false,
    util: false,
    stream: false,
    process: false,
    path: require.resolve('path-browserify'),
    fs: false,
    url: require.resolve('url/'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
  },
  ...commonResolve,
};

const { plugins: commonPlugins } = commonConfig;
const plugins = [
  ...commonPlugins,
  new webpack.ProvidePlugin({
    process: 'process/browser', // provide a shim for the global `process` variable
    Buffer: ['buffer', 'Buffer'],
  }),
];
/**@type {import('webpack').Configuration}*/
const config = {
  ...commonConfig,
  target: 'webworker', // extensions run in a webworker context
  mode: 'none', // this leaves the source code as close as possible to the original (when packaging we set this to 'production')
  output: {
    // the bundle is stored in the 'dist' folder (check package.json), 📖 -> https://webpack.js.org/configuration/output/
    path: path.resolve(__dirname, '../', 'dist/web'),
    filename: 'extension.js',
    libraryTarget: 'commonjs',
  },
  // @ts-ignore
  resolve,
  plugins,
  performance: {
    hints: false,
  },
};
module.exports = config;
