var gulp          = require('gulp');
var jade          = require('gulp-jade');
var browserSync   = require('browser-sync').create();
var sass          = require('gulp-sass');


gulp.task('jade', function(){
  gulp.src('jadefiles/*.jade')
    .pipe(jade({
    }))
    .pipe(gulp.dest('_build/'))
});

gulp.task('js', function() {
  gulp.src('js/*.js', { base: './' })
  .pipe(gulp.dest('_build/'));
});

gulp.task('browser-sync', ['sass'], function() {
  browserSync.init({
    server: "_build/"
  });

  gulp.watch("sass/*", ['sass']);
  gulp.watch("jadefiles/*", ['jade']);
  gulp.watch('js/*', ['js']);

  gulp.watch('_build/*.html').on('change', browserSync.reload);
  gulp.watch('_build/js/*').on('change', browserSync.reload);
});

gulp.task('resources', function() {
  gulp.src('res/*', {base: './'})
  .pipe(gulp.dest('_build/'));
});

gulp.task('sass', function () {
  return gulp.src('sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('_build/css'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['jade', 'sass', 'resources', 'js', 'browser-sync']);
