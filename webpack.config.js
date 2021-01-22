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