var gulp = require('gulp'),
  sass = require('gulp-sass'),
  rename = require('gulp-rename'),
  minify = require('gulp-minify'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  concat = require('gulp-concat'),
  deporder = require('gulp-deporder')

 
gulp.task('compress-old', function() {
    return gulp.src('./frontend/js/main.js')
      .pipe(deporder())
      .pipe(minify())
      .pipe(gulp.dest('./public/build/js/'))
});
// JS
gulp.task('compress', function(){
  return gulp.src('./frontend/js/main.js')
      .pipe(deporder())
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