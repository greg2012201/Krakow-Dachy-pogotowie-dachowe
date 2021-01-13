const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const webpackConfiguration = require('../webpack.config');
module.exports = merge(webpackConfiguration, {


    mode: 'development',

    devServer: {

        open: true,
        hot: true,
        openPage: '',


        client: {
            logging: 'error'
        },

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