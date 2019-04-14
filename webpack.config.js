"use strict";

const path = require('path'); 
  
module.exports = {
  mode: 'production',
  entry: './frontend/js/main.js',  
  
  output: {  
    filename: 'teste.js',  
    path: path.resolve('dist')  
  },  
  
 module: {      
     rules: [        
         {          
             test: /\.js$/,          
             use: 'babel-loader'        
            }      
        ]    
    }  
}