var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var plugins = [];

plugins.push(
    new ExtractTextPlugin('./style.css')
);

module.exports = [{
    entry: [
        './src/js/index.js',
        './src/css/theme.scss'
    ],
    output: {
        filename: 'index.js'
    },
    module: {
        rules:  [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel-loader']
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                "css-loader?sourceMap!postcss-loader!sass-loader?sourceMap"
            )
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract(
                "css-loader?sourceMap!postcss-loader!less-loader?sourceMap"
            )
        },{
            test: /.(png|woff(2)?|eot|ttf|svg|jpg)(\?[a-z0-9=\.]+)?$/,
            loader: 'file-loader?name=../css/[hash].[ext]'
        }]
    },
    plugins: plugins,
    resolve: {
        extensions: ['.js', '.scss', '.styl', '.less', '.css']
    }
}];