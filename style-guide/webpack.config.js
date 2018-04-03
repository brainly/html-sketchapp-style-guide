module.exports = {
  target: 'node',
  entry: './buildHTML.js',
  output: {
    filename: './build/buildHTML.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /(\.json|\.jsx|\.json)/,
        loader: 'babel-loader'
      }
    ]
  }
};
