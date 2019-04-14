const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('./frontend/js/main.js', './public/build/js')
   .sass('./frontend/sass/main.scss', './public/build/css');

mix.copy('./frontend/img', './public/build/img');
