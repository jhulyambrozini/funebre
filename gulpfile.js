const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
  return tsProject
    .src()
    .pipe(tsProject())
    .on('error', () => {})
    .pipe(uglify())
    .pipe(concat('scripts.js'))
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

gulp.task('default', ['styles', 'scripts']);
