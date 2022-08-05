const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',  //'ReactShop/bundle.js'  // es para poder hacer deploy en github pages
        publicPath: '/', // '/ReactShop/' es para poder hacer deploy en github pages
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {

        }
    },
    mode: 'development',
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg|jpeg|webp)$/i,
                type: 'asset',
                generator: {
                    filename: 'assets/images/[hash][ext][query]',
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        historyApiFallback: true,
        port: 3006,
        open: true
    },
}