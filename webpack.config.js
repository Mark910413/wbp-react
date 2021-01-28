/*
 * @Author: your name
 * @Date: 2021-01-20 17:27:22
 * @LastEditTime: 2021-01-28 16:16:45
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \wpk-react\webpack.config.js
 */
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
 template: path.join(__dirname, "./src/index.html"),
 filename: "./index.html"
});
module.exports = {
 entry: path.join(__dirname, "./src/Index.jsx"),

 devtool: 'inline-source-map',
 module: {
   rules: [{
     test: /\.(js|jsx)$/,
   use: "babel-loader",
   exclude: /node_modules/
 },{
   test: /\.(css|less)$/,
   use: ["style-loader", "css-loader", "less-loader"]
 }]
},
 plugins: [htmlWebpackPlugin],
 resolve: {
   extensions: [".js", ".jsx"],
   alias: {
     '@src': path.resolve(__dirname, './src'),
     '@page': path.resolve(__dirname, './src/page'),
     '@store': path.resolve(__dirname, './src/store'),
   }
 },
  devServer: {
   port: 3000,
   host: 'localhost',
   open: true,
   proxy: {
    '/api': 'http://localhost:3000'
  }
 }
};