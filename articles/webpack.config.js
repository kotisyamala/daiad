const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const ModuleFedarationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode:'development',
    devServer: {
        port:8081,
    },
    plugins:[
        new ModuleFedarationPlugin({
            name:'articles',
            filename:'remoteEntry.js',
            exposes:{
                './ArticlesIndex':'./src/App',
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    entry: "./src/App.js",
    output: {
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' }
            }
        ]
    }
};