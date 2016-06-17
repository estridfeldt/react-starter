module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname,
    filename: 'build/bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      {test: /\.css$/, exclude: /node_modules/, loader: 'style'}
    ]
  }
};

