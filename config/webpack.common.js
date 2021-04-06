const path = require('path')
const htmlWebPackPlugin = require('html-webpack-plugin')

const config = {
  entry: './js/index.js',
  output: {
    filename: '[fullhash].bundle.js',
    path: path.resolve(__dirname, '../', 'bundle')
  },
  module: {
    rules: [
      {
        test: /\.jpg$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000
          }
        }
      }
    ]
  },
  plugins: [new htmlWebPackPlugin]    
}

module.exports = config;