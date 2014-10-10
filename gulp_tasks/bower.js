var gulp = require('gulp');
var bower = require('gulp-bower');
var flatten = require('gulp-flatten');
var gulpFilter = require('gulp-filter');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var mainBowerFiles = require('main-bower-files');

gulp.task('bower', function() {
    return bower().pipe(gulp.dest('build/vendor'))
});

gulp.task('libs', function() {
    var jsFilter = gulpFilter('*.js');
    var cssFilter = gulpFilter('*.css');

    return gulp.src(mainBowerFiles())
        // grab vendor js files from bower_components, minify and push in /build
        .pipe(jsFilter)
        .pipe(gulp.dest('build/debug/js/vendor'))
        .pipe(uglify())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest('build/release/js/vendor'))
        .pipe(jsFilter.restore())
        // grab vendor css files from bower_components, minify and push in /build
        .pipe(cssFilter)
        .pipe(gulp.dest('build/debug/css/vendor'))
        .pipe(minifycss())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest('build/release/css/vendor'));
});