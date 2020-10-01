module.exports = function () {
  $.gulp.task('stylus', function () {
    return $.gulp.src('src/stylus/*.styl')
      //.pipe($.glp.sourcemaps.init())
      .pipe($.glp.stylus({
        'include css': true
      }))
      .pipe($.glp.autoprefixer({
        cascade: true
      }))
      .on("error", $.glp.notify.onError({
        title: "Stylus error"
      }))
      .pipe($.glp.csso())
      //.pipe($.glp.sourcemaps.write())
      .pipe($.gulp.dest('./css'))
      .pipe($.bs.reload({
        stream: true
      }));
  });
};