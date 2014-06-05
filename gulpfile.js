var gulp = require('gulp'),
  rjs = require('gulp-requirejs');

gulp.task('default', function() {
  rjs({
    baseUrl: 'js/',
    mainConfigFile: 'js/main.js',
    name: 'main',
    out: 'optimized.js',
    include: ['../bower_components/almond/almond.js']
  }).pipe(gulp.dest('dist/'));
});