var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('sass', function () {
    gulp.src('css/all.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'))
        .pipe(reload({ stream:true }));
});

// watch files for changes and reload
gulp.task('server', ['sass'], function() {
  browserSync({
    server: {
      baseDir: ''
    }
  });

  gulp.watch('css/*.scss', ['sass']);
  gulp.watch(['*.html', 'css/**/*.css', 'js/**/*.js'], {cwd: 'app'}, reload);
});