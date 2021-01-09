const path = require('path');
const webpack = require('webpack');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const env = process.env.NODE_ENV;

module.exports = {
  entry: './src/index.js',

  mode: 'development',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[contenthash].js',
    /* publicPath: '/' */
  },

  devServer: {

    open: true,
    hot: true,
    static: [{
      directory: path.join(__dirname, 'public'),
      watch: true,

    }],

    port: 8080,

  },

  module: {
    rules: [{
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[name][contenthash].[ext]',
          outputPath: 'images',
          publicPath: 'images',

        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          env == 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/templates/template.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash].css",
      chunkFilename: "[id].css"
    }), new CopyPlugin({
      patterns: [{
        from: 'public/images',
        to: 'images',
      }]
    }), new CleanWebpackPlugin(),
  ]
};