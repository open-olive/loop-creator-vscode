//@ts-check

'use strict';
const path = require('path');
const webpack = require('webpack');
const { DefinePlugin } = require('webpack');

/** @typedef {import('webpack').Configuration} WebpackConfig **/
/** @type WebpackConfig */
const webExtensionConfig = {
  target: 'webworker', // extensions run in a webworker context
  mode: 'none', // this leaves the source code as close as possible to the original (when packaging we set this to 'production')
  entry: './src/extension.ts',
  output: {
    // the bundle is stored in the 'dist' folder (check package.json), 📖 -> https://webpack.js.org/configuration/output/
    path: path.resolve(__dirname, 'dist/web'),
    filename: 'extension.js',
    libraryTarget: 'commonjs',
  },
  devtool: 'nosources-source-map', // create a source map that points to the original source file
  externals: {
    vscode: 'commonjs vscode', // ignored because it doesn't exist
  },
  resolve: {
    mainFields: ['browser', 'module', 'main'], // look for `browser` entry point in imported node modules
    extensions: ['.ts', '.js'], // support ts-files and js-files
    alias: {
      // provides alternate implementation for node module and source files
    },
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
      {
        test: /\.(html|squirrelly)$/,
        use: 'raw-loader',
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser', // provide a shim for the global `process` variable
      Buffer: ['buffer', 'Buffer'],
    }),
    new DefinePlugin({
      __GOOGLE_ANALYTICS_ID__: process.env.GOOGLE_ANALYTICS_ID
        ? // This is a code injection, so it needs to be defined as a string with the quotes
          `\'${process.env.GOOGLE_ANALYTICS_ID}\'`
        : undefined,
      __ENVIRONMENT__: process.env.ENVIRONMENT
        ? `\'${process.env.ENVIRONMENT}\'`
        : "'dev'",
    }),
  ],
  performance: {
    hints: false,
  },
};
module.exports = webExtensionConfig;
