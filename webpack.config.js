var path = require('path'),
input_path = path.join('app', 'assets', 'javascripts');
output_path = path.join('public', 'assets', 'javascripts');

// Bootstrap javascript source
var bootstrapSass = {
  in: 'node_modules/bootstrap-sass/'
};

var config = {
  context: path.resolve(input_path),
  entry: './main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(output_path)
  },
  externals: {
    jquery: 'var jQuery'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.resolve(input_path),
    modulesDirectories: [bootstrapSass.in + 'assets/javascripts']
  },
  module: {
    loaders: [
      {
        loader: '6to5-loader'
      }
    ]
  }
};

module.exports = config;
