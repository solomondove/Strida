const path = require('path');

module.exports = {
    entry: './frontend/strida.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['@babel/env', '@babel/react']
                }
            }, 
            {        
                test: /\.css$/,        
                use: ['style-loader','css-loader'],      
            }
        ]
    }, 
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*'],
    }
};
