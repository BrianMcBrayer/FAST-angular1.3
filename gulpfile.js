var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var gulpConfig = require('./gulp.config.json');
var rename = require('gulp-rename');
var del = require('del');

gulp.task('serve', ['build'], function() {
  browserSync({
    server: {
      baseDir: gulpConfig.paths.dist
    }
  });

  gulp.watch(gulpConfig.paths.serverWatch, ['clean+build+reload']);
});

gulp.task('clean', function(cb) {
  del(gulpConfig.paths.clean, cb);
});

gulp.task('clean+build+reload', ['clean+build'], reload);
gulp.task('build+reload', ['build'], reload);

(function() {
  gulp.task('build:html', buildHtml);
  gulp.task('clean+build:html', ['clean'], buildHtml);

  gulp.task('build:srcDeps', buildSrcDeps);
  gulp.task('clean+build:srcDeps', ['clean'], buildSrcDeps);

  gulp.task('build:src', buildSrc);
  gulp.task('clean+build:src', ['clean'], buildSrc);

  function buildHtml() {
    return gulp.src(gulpConfig.paths.htmlSrc)
      .pipe(gulp.dest(gulpConfig.paths.dist));
  }

  function buildSrc() {
    return gulp.src(gulpConfig.paths.jsSrc)
      .pipe(gulp.dest(gulpConfig.paths.dist));
  }

  function buildSrcDeps() {
    return gulp.src(gulpConfig.paths.depSrc)
      .pipe(rename({dirname: './'}))
      .pipe(gulp.dest(gulpConfig.paths.distJs));
  }
})()

gulp.task('clean+build', ['clean+build:html', 'clean+build:src', 'clean+build:srcDeps']);
gulp.task('build', ['build:html', 'build:src', 'build:srcDeps']);

gulp.task('default', ['clean+build']);
