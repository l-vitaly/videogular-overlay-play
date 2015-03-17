/**
 *
 * The packages we are using
 * Not using gulp-load-plugins as it is nice to see whats here.
 *
 **/
var gulp = require('gulp');
var uglify = require('gulp-uglify');

/**
 *
 * Javascript Build
 * - Uglify
 *
 **/
gulp.task('build', function () {
    gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
});