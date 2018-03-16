var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, 'components/router.jsx');
var BUILD_PATH = path.resolve(__dirname, 'build');

module.exports = {
    entry: APP_PATH,
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['babel-loader?presets[]=es2015,presets[]=react']
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=25000'
            },
            {
                test: /\.html$/,
                loader: 'html-withimg-loader'
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
}