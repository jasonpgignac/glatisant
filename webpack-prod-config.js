var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './source/js/app.jsx',

    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        extensions: ['.jsx', '.js', '.json', '.css', '.styl', '.jpg', 'png', 'html', 'htm']
    },

    module: {
        rules: [
            { test: /\.jsx$/, exclude: /node_modules/, loader: 'eslint-loader', enforce: 'pre', options: { emitError: true, emitWarning: false } },

            { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader', options: { presets:['es2015', 'react'] } },
            
            { test: /\.css$/, loader: "style-loader!css-loader" },

			{ test: /\.styl$/, loader: "style-loader!css-loader!stylus-loader"},
			
			{ test: [/\.jpg$/, /\.png$/], loader: 'file-loader'},
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Glatisant',
        filename: 'index.html',
        template: 'index.ejs'
    })]
};