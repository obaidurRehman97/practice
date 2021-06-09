var path = require('path')

module.exports = {
    mode:'development',
    entry:path.join(__dirname,'./index.js'),
    output:{
        path:__dirname+'/dist/',
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:'babel-loader'
            }
        ]
    }
}