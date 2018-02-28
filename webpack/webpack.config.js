const path = require('path');

const rootPath = path.resolve(__dirname, '..');

module.exports = {
  entry: path.join(rootPath, 'src/text.index.js'),
  output: {
    path: path.join(rootPath, 'dist'),
    filename: 'text.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader'
      }
    ]
  }
};