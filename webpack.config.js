"use strict";

const path = require('path');
  
module.exports = {
  mode: 'development',
  entry: {
    libs: './frontend/js/main.js',
    custom: './frontend/js/custom.js'
  },
  output: {  
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './public/build/js')
  },  
  
 module: {      
     rules: [        
        {  
          test: /\.js$/,
          loader: 'babel-loader'
        }
      ]    
    }
};