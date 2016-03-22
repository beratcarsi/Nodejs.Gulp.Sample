var gulp = require('gulp'); 
var clean = require('gulp-clean'); 
var concat = require('gulp-concat'); 
var uglify = require('gulp-uglify'); 
var rename = require('gulp-rename'); 
var filesize = require('gulp-filesize');
var projectError = require('gulp-util');  

gulp.task('clean', function () {  
  return gulp.src('build', {read: false})
    .pipe(clean());
});
 
gulp.task('tester', function() {  
  return gulp.src('script/*.js')
    .pipe(concat('project.js'))
    .pipe(gulp.dest('build'))
    .pipe(filesize())
    .pipe(uglify())
    .pipe(rename('project.min.js'))
    .pipe(gulp.dest('build'))
    .pipe(filesize())
    .on('error', projectError.log)
});

gulp.task('default', ['clean','tester']);
