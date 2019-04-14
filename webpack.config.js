"use strict";

const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'development';

var config = {
  // TODO: Add common Configuration
  module: {},
};


var jsConfig = Object.assign({}, config,{
  name: "b",
  entry: {
    libs: './frontend/js/main.js',
    custom: './frontend/js/custom.js'
  },
  output: {  
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './public/build/js')
  },
});

var cssConfig = Object.assign({}, config, {
  name: "a",
  entry : {
    scss: './frontend/sass/index.js'
  },
  output : {
      filename : '[name].bundle.js',
      path : path.resolve(__dirname, './public/build/css')
  },
});

module.exports = {
  jsConfig, cssConfig, 
 module: {      
     rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { url: false, sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } }
        ],
      },
      {  
        test: /\.js$/,
        loader: 'babel-loader'
      } 
    ]    
  },
  plugins: [
      new MiniCssExtractPlugin({
          filename: "app.css"
      })
      
  ],
  mode : devMode ? 'development' : 'production'
};