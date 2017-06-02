// webpack.config.js
var webpack = require("webpack");
var path = require("path");

module.exports = {
    devtool: 'source-map',
    context: path.resolve(__dirname, "src"),
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'gh-icons.js' // 打包输出的文件
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ],
    },
};
