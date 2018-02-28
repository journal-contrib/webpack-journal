const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new CleanWebpackPlugin(['dist']),
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output: {
    filename: "[name].[hash].bundle.js",
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
}
