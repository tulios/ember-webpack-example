var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app: './app/index.js',
    vendor: './app/vendor.js'
  },
  output: {
    path: './dist',
    filename: '[name].js'
  },
  resolve: {
    alias: {
      ember: path.join(__dirname, './ember'),
      app: path.join(__dirname, './app')
    }
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
        include: /app\/templates/,
        loader: 'ember-webpack-loaders/htmlbars-loader'
      },
      {
        test: /app\/index\.js/,
        loader: 'ember-webpack-loaders/inject-templates-loader!ember-webpack-loaders/inject-modules-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name: "vendor"}),
    new ExtractTextPlugin("app.css")
    // new webpack.optimize.UglifyJsPlugin()
  ],
  devServer: {
    contentBase: './dist'
  },
  node: {
    fs: 'empty'
  }
}
