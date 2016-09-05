const webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/index'
    ],
    vendor: [
      'immutable',
      'react', 'react-dom', 'react-redux', 'react-hot-api', 'react-router',
      'redux', 'redux-thunk', 'isomorphic-fetch', 'lodash', 'qs', 'js-cookie'
    ]
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel!eslint'
    }, {
      test: /\.sass/,
      loader: 'style!css!sass'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    publicPath: '/',
    hot: true
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'eval'
};
