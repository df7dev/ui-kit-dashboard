var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
const minify = require('gulp-minify');
 
gulp.task('compress', function() {
  gulp.src(['./frontend/js/main.js'])
    .pipe(minify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('./public/build/js/'))
});

 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./frontend/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('./public/build/css/'));
});

