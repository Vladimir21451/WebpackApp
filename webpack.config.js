const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PATHS = {
 source: path.join(__dirname, 'source'),
 build: path.join(__dirname, 'build')
};
module.exports = {
 entry: PATHS.source + './src/index.js',
 output: {
 path: PATHS.build,
 filename: '[name].js'
},
 plugins: [
    new HtmlWebpackPlugin({
    title: 'Webpack app',
    template: PATHS.source + '../app/index.pug',
    filename: './app/index.html',
 })
],
 module:{
   rules: [
   {
   test: /\.pug$/,
   loader: 'pug-loader',
   options: {
   pretty: true
   }
   }
   ]
 }
};