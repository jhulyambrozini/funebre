const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const ts = require('gulp-typescript');

gulp.task('scripts', () => {
  return gulp
    .src('./src/scripts/*.ts')
    .pipe(
      ts({
        noImplicitAny: false,
        outFile: 'main.js',
      })
    )
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('styles', () => {
  return gulp
    .src('./src/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function () {
  gulp.watch('./src/styles/*.scss', ['styles']);
  gulp.watch('./src/scripts/*.ts', ['scripts']);
});

gulp.task('default', ['styles', 'scripts', 'watch']);
