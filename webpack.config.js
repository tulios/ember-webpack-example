var path = require('path')

module.exports = {
  entry: {
    app: './index.js'
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
        loader: './loaders/ember-htmlbars-loader'
      },
      {
        test: /index\.js/,
        loader: './loaders/ember-inject-templates-loader'
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
