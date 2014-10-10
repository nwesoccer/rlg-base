var requireDir = require('require-dir');
var gulp = require('gulp');

gulp.task('default', function() {
    console.log('default task')
});

requireDir('./gulp_tasks', { recurse: true });