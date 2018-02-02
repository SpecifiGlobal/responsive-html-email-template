var gulp = require('gulp');
var inlinesource = require('gulp-inline-source');
var inlineCss = require('gulp-inline-css');

// Inline CSS rules in HTML file
gulp.task('inlinecss', [ 'inlinesource' ], function() {
    return gulp.src('./out/*.html')
        .pipe(inlineCss({ preserveMediaQueries: true }))
        .pipe(gulp.dest('./out'));
});

// inline styles, javascript etc via Gulp
gulp.task('inlinesource', function () {
    var options = {
        compress: false
    };

    return gulp.src('./src/*.html')
        .pipe(inlinesource(options))
        .pipe(gulp.dest('./out'));
});