var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var minify = require('gulp-minify');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
 
gulp.task('compress-old', function() {
    return gulp.src([ './node_modules/jquery/dist/jquery.slim.min.js', './frontend/js/custom/sidebar.js' ])
      .pipe(minify())
      .pipe(rename('app.min.js'))
      .pipe(gulp.dest('./public/build/js/'))
});

gulp.task('compress', function(){
  return gulp.src(['./node_modules/jquery/dist/jquery.min.js', './node_modules/bootstrap/dist/js/bootstrap.min.js',  './frontend/js/custom/sidebar.js'])
      .pipe(concat('concat.js'))
      .pipe(gulp.dest('./public/build/js/'))
      .pipe(uglify())
      .pipe(gulp.dest('./public/build/js/'));
});

sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src([
    './frontend/sass/main.scss'
    ])
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('./public/build/css/'));
});