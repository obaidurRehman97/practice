var path = require('path')
var webpack = require('webpack')

module.exports = {
    mode:'development',
    entry:["@babel/polyfill","./index.js"],
    output:{
        path:__dirname+'/dist/',
        filename:'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:'babel-loader'
            },
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use:'file-loader'
            }
        ]
    }
}