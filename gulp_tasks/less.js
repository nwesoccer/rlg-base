var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('less', function () {
    gulp.src('source/less/**/*.less')
        .pipe(less({}))
        .pipe(gulp.dest('build/debug/css'))
        .pipe(minifycss())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest('build/release/css'));
});