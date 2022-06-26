const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFedarationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports ={
    mode:'development',
    devServer:{
        port:8080
    },
    plugins : [
        new ModuleFedarationPlugin({
            name:'container',
            remotes:{
                articles:'articles@http://localhost:8081/remoteEntry.js',
            }
        }),
        new HtmlWebpackPlugin({
            template:'./public/index.html',
        })
    ],
    entry: "./src/index.js",
    output: {
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    }

    
}