var path = require('path');

module.exports = {
  entry: './frontend/todo_redux.jsx',
  output: {
    filename: './bundle.js',
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react'],
            plugins: ['emotion']
          }
        },
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*'],
    alias: {
      Util: path.resolve(__dirname, 'util'),
      Actions: path.resolve(__dirname, 'frontend', 'actions'),
      Components: path.resolve(__dirname, 'frontend', 'components'),
      Reducers: path.resolve(__dirname, 'frontend', 'reducers'),
      Store: path.resolve(__dirname, 'frontend', 'store'),
      Middleware: path.resolve(__dirname, 'frontend', 'middleware')
    }
  }
};