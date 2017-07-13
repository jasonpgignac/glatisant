//import path from 'path';

module.exports = {
    entry: "./js/source/app.jsx",

    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        extensions: [".jsx", ".js", ".json"]
    },

    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', options: { presets:['es2015', 'react'] } },
        ]
    },
    
    devServer: {

        compress: true,

        disableHostCheck: true,   // That solved it

    },      
};