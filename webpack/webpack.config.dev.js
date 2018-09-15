const merge = require('webpack-merge');
const path = require('path');
const webpackConfig = require('./webpack.config.base');

module.exports = merge(webpackConfig, {

  devtool: 'eval',

  devServer: {
    port: 8080
  }
});