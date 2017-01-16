var webpack = require('webpack')
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义文件夹路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    //项目文件夹，默认index.js
    entry: APP_PATH,
    //输出文件名
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                include: APP_PATH,
                loader: 'jshint-loader'
            }
        ],
        loaders: [
            {
                //匹配文件正则
                test: /\.css$/,
                //处理这些文件的loader，处理顺序为从右到左
                loaders: ['style', 'css?sourceMap'],
                include: APP_PATH
            },
            {
                //匹配文件正则
                test: /\.scss$/,
                //处理这些文件的loader，处理顺序为从右到左
                loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
                include: APP_PATH
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=4000000'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: APP_PATH,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    //插件
    plugins: [
        new HtmlwebpackPlugin({
            tilte: 'Hello World app'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": 'jquery'
        })
    ],
    devserver: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        proxy: {
            '/api/*': {
                target: 'http://localhost:5000',
                secure: false
            }
        }
    },
    devtool: 'eval-source-map',
    jshint: {
        'esnext': true
    }
};
