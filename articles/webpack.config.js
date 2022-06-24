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
                './ArticlesIndex':'./src/index',
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};