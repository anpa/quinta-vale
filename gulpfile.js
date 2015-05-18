// gulp
var gulp = require('gulp');

// plugins
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


// TASKS

//compile sass
gulp.task('sass', function () {
    gulp.src('app/css/all.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css'))
        .pipe(reload({ stream:true }));
});

//start server
gulp.task('server', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
    port: process.env.PORT || 3000
  });
});

//run project
gulp.task('start', ['sass', 'server']);

//update css
gulp.watch('app/css/*.scss', ['sass']);
//live reload
gulp.watch(['*.html', 'app/css/**/*.css', 'app/js/**/*.js'], {cwd: 'app'}, reload);
