const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const webpackConfiguration = require('../webpack.config');

module.exports = merge(webpackConfiguration, {
    entry: './src/index.js',

    mode: 'development',

    output: {
        path: path.resolve(__dirname, '../', 'dist'),
        filename: '[name].js',
        /*  publicPath: '/' */
    },

    devServer: {

        open: true,
        hot: true,
        openPage: '',

        static: [{
            directory: path.join(__dirname, '../', 'public'),
            watch: true,

        }],
        host: 'localhost',
        port: 8080,
        // contentBase: './dist'

    },



    plugins: [

        new webpack.HotModuleReplacementPlugin(),
    ]
});