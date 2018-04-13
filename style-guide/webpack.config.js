module.exports = {
  target: 'node',
  entry: './buildHTML.js',
  output: {
    filename: './build/buildHTML.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
