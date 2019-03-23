const path = require('path');

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/, 
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env'] // Indicating which environment to use
                }
            }
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'), // Tells the "live-server" piece what to serve up.
        publicPath: '/scripts/' //Tells the dev server where webpack is saving the assets
    },
    devtool: 'source-map'
};