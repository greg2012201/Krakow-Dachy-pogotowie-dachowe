const path = require('path');

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
    filename: '[name].js',
    
  },



  module: {
    rules: [{
        test: /\.(jpg|png|svg|gif|jpeg)$/,
        use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
              publicPath: 'images',
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                quality: 70,
                progresive: true,
              }

            }
          }
        ]


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
          'postcss-loader',
          'sass-loader',
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/templates/template.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }), new CopyPlugin({
      patterns: [{
        from: 'public/images',
        to: 'images',
      }]
    }),
    new CleanWebpackPlugin(),
  ]
};