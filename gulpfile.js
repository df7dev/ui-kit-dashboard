var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var minify = require('gulp-minify');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
 
gulp.task('compress-old', function() {
    return gulp.src([ './node_modules/jquery/dist/jquery.slim.min.js', './frontend/js/custom/sidebar.js' ])
      .pipe(minify())
      .pipe(rename('app.min.js'))
      .pipe(gulp.dest('./public/build/js/'))
});
// JS
gulp.task('compress', function(){
  return gulp.src(['./node_modules/jquery/dist/jquery.min.js', './node_modules/bootstrap/dist/js/bootstrap.min.js', './node_modules/simplebar/dist/simplebar.min.js', './node_modules/@fortawesome/fontawesome-free/js/all.min.js',  './frontend/js/custom/sidebar.js'])
      .pipe(concat('concat.js'))
      .pipe(gulp.dest('./public/build/js/'))
      .pipe(rename('app.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./public/build/js/'));
});

// Fonts
gulp.task('icons', function() {
  return gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
      .pipe(gulp.dest('./public/build/webfonts/'));
});

// Sass
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src(['./frontend/sass/main.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('./public/build/css/'));
});