var webpack = require("webpack");

module.exports = {
  entry: {
    app: './index.js'
  },
  output: {
    path: './dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.hbs$/,
        loader: './plugins/htmlbars-loader'
      }
    ]
  },
  devServer: {
    contentBase: './dist'
  },
  node: {
    fs: 'empty'
  }
}
