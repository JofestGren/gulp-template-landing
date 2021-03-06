module.exports = function () {
  $.gulp.task('pug', function () {
    return $.gulp.src('src/pug/sections/*.pug')
      .pipe($.gp.pug({
        pretty: true
      }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
            title: 'Pug',
            message: error.message
        };
      }))
      .pipe($.gulp.dest('./build/'))
      .on('end', $.bs.reload);
  });
}