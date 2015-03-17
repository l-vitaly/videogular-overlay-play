/**
 *
 * The packages we are using
 * Not using gulp-load-plugins as it is nice to see whats here.
 *
 **/
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
/**
 *
 * Javascript Build
 * - Uglify
 * - Rename
 *
 **/
gulp.task('build', function () {
    gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'))
});