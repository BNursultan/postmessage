const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');

const webpackConfig = {
  devtool: 'source-map',
  plugins: [],
};

const webpackUmdConfig = merge({}, webpackConfig, 
  {
    mode: 'development',
    entry: {
      'wedding.umd': ['core-js/es5', './main.js']
    },
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
  }, 
  process.env.NODE_ENV === 'production' 
  ? {
    plugins: [
      new UglifyJsPlugin({
        uglifyOptions: {
          ie8: true,
        },
      })
    ]
  }
  : {}
)

const webpackEsConfig = merge({}, webpackConfig, {
  mode: 'development',
  entry: {
    'wedding.es': ['./main.js']
  },
  output: {
    filename: 'wedding.amd.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'amd',
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
})

module.exports = [
  webpackUmdConfig,
  webpackEsConfig
];
