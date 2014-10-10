var gulp = require('gulp');
var react = require('gulp-react');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('react', function () {
    gulp.src('source/jsx/**/*.jsx')
        .pipe(react({}))
        .pipe(gulp.dest('build/debug/js'))
        .pipe(uglify())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest('build/release/js'));
});