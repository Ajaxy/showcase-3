const webpack = require('webpack');

module.exports = {
  entry: {
    app: [
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
      loader: 'babel'
    }, {
      test: /\.sass/,
      loader: 'style!css!sass'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ],
  devtool: 'eval'
};
