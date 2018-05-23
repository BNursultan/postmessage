const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './main.js',
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
