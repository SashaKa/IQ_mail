const gulp = require('gulp');
const sass = require('gulp-sass');
const inky = require('inky');
const inlineCss = require('gulp-inline-css');
const inlinesource = require('gulp-inline-source');



gulp.task('styles', function () {
  return gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

//CONVERTE INKY
gulp.task('inky', ['styles'], function() {
  return gulp.src('./templates/**/*.html')
    .pipe(inlinesource())
    .pipe(inky())
    .pipe(inlineCss({
        preserveMediaQueries: true,
        removeLinkTags: false
    }))
    .pipe(gulp.dest('./dist'));
});

//WATCH
gulp.task('default',function() {
    gulp.watch(['./scss/*.scss', './templates/**/*.html'],['inky']);
});