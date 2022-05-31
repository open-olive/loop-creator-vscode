/* eslint-disable @typescript-eslint/naming-convention */
const { DefinePlugin } = require('webpack');

const config = {
  devtool: 'nosources-source-map',
  entry: './src/extension.ts',
  externals: {
    vscode: 'commonjs vscode', // the vscode-module is created on-the-fly and must be excluded. Add other modules that cannot be webpack'ed, 📖 -> https://webpack.js.org/configuration/externals/
  },
  resolve: {
    // support reading TypeScript and JavaScript files, 📖 -> https://github.com/TypeStrong/ts-loader
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
      {
        test: /\.(html|squirrelly)$/,
        use: 'raw-loader',
      },
    ],
  },
  plugins: [
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
};

module.exports = config;
