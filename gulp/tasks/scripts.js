module.exports = function () {
  $.gulp.task('scripts', function () {
    return $.gulp.src(['src/js/*.js'])
      .pipe($.glp.concat('scripts.min.js'))
      .pipe($.gulp.dest('./js'))
      .pipe($.bs.reload({
        stream: true
      }));
  });
};