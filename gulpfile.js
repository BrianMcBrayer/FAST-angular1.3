var gulp = require('gulp');
var gulpConfig = require('./gulp.config.json');

gulp.task('build:html', function() {
  return gulp.src(gulpConfig.paths.htmlSrc)
    .pipe(gulp.dest(gulpConfig.paths.dist));
});

gulp.task('build:src', function() {
  return gulp.src(gulpConfig.paths.jsSrc)
    .pipe(gulp.dest(gulpConfig.paths.dist));
});

gulp.task('build', ['build:html', 'build:src']);

gulp.task('default', ['build']);
