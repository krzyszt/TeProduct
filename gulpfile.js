var gulp = require('gulp');
var concat = require('gulp-concat');
var angularFilesort = require('gulp-angular-filesort');
var strip = require('gulp-strip-line');
var templateCache = require('gulp-angular-templatecache');

gulp.task('buildMenuTemplateCache', function () {
  return gulp
    .src([
      './app/te-modules/teMenu/**/*.html'
    ])
    .pipe(templateCache({
      root: 'te-modules/teMenu/',
      module: 'teMenu'
    }))
    .pipe(gulp.dest('./app/te-modules/teMenu/'))
    ;
});

gulp.task('buildDashboardTemplateCache', function () {
  return gulp
    .src([
      './app/te-modules/teDashboard/**/*.html'
    ])
    .pipe(templateCache({
      root: 'te-modules/teDashboard/',
      module: 'teDashboard'
    }))
    .pipe(gulp.dest('./app/te-modules/teDashboard/'))
    ;
});

gulp.task('buildFrameworkTemplateCache', function () {
  return gulp
    .src([
      './app/te-modules/teFramework/**/*.html'
    ])
    .pipe(templateCache({
      root: 'te-modules/teFramework/',
      module: 'teFramework'
    }))
    .pipe(gulp.dest('./app/te-modules/teFramework/'))
    ;
});

gulp.task('buildJavaScript', function () {
  return gulp
    .src([
      './app/te-modules/**/*.js'
    ])
    .pipe(angularFilesort())
    .pipe(strip(["use strict"]))
    .pipe(concat('teFramework.js'))
    .pipe(gulp.dest('./dist/'))
    ;
});

gulp.task('buildCSS', function () {
  return gulp
    .src([
      './app/te-modules/**/*.css'
    ])
    .pipe(concat('teFramework.css'))
    .pipe(gulp.dest('./dist/'))
    ;
});