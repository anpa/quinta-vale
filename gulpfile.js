// gulp
var gulp = require('gulp');

// plugins
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync');
var fileinclude = require('gulp-file-include');
var reload = browserSync.reload;


// TASKS

//compile sass
gulp.task('sass', function () {
    gulp.src('app/css/all.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css'))
        .pipe(reload({ stream:true }));
});

//compile partials
gulp.task('templates', function() {
  gulp.src(['app/templates/*.html'])
    .pipe(fileinclude())
    .pipe(gulp.dest('app'));
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
gulp.task('start', ['sass', 'templates', 'server']);

//update css
gulp.watch('app/css/*.scss', ['sass']);
//update html
gulp.watch('app/templates/**/*.html', ['templates']);
//live reload
gulp.watch(['*.html', 'app/css/**/*.css', 'app/js/**/*.js'], {cwd: 'app'}, reload);
