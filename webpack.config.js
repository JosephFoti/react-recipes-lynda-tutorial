const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config()


module.exports = {
  entry:['whatwg-fetch', './index.js'],
  mode: 'development',
  context: path.join(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.css/,
      loader: ['style-loader','css-loader','postcss-loader']
    },
    {
      test: /\.(png|jpg)$/,
      loader: 'file-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(process.env.API_URL)
    })
  ]
}
