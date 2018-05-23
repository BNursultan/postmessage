const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const webpackConfig = {
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
  plugins: [],
};

if (process.env.NODE_ENV === 'production') {
  webpackConfig.plugins.push(new UglifyJsPlugin({
    sourceMap: true,
    uglifyOptions: {
      ie8: true,
    },
  }));
}

module.exports = webpackConfig;
