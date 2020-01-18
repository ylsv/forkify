const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/js/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'), // to where it exports the code
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  module: { // babel loaders
    rules: [
      {
        test: /\.js$/,    // check if all files needed end in .js
        exclude: /node_modules/,   // exclude all files from node-modules
        use: {
          loader: 'babel-loader' // use babel-loader
        }
      }
    ]
  }
};