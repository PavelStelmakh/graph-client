import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';

import { NODE_ENV } from './config';

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 8000,
        host: 'localhost',
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.[hash].html',
            template: path.resolve(__dirname, 'index.html'),
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer',
        }),
    ],
    stats: {
        colors: true,
        errors: true,
        warnings: true,
    },
    devtool: NODE_ENV === 'development' ? 'source-map' : ''
};
