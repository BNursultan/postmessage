const path = require('path');

const webpackConfig = {
  mode: process.env.NODE_ENV,
  entry: ['core-js/es5', './main.js'],
  output: {
    filename: 'wedding.umd.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Wedding',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  devtool: 'source-map',
};

module.exports = webpackConfig;
