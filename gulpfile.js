var gulp = require('gulp');
var scss = require("gulp-scss");
var inlinesource = require('gulp-inline-source');
var inlineCss = require('gulp-inline-css');

// Inline CSS rules in HTML file
gulp.task('inlinecss', [ 'scss', 'inlinesource' ], function() {
    return gulp.src('./out/*.html')
        .pipe(inlineCss({ preserveMediaQueries: true }))
        .pipe(gulp.dest('./out'));
});

// inline styles, javascript etc via Gulp
gulp.task('inlinesource', function () {
    return gulp.src('./src/*.html')
        .pipe(inlinesource({
            compress: false
        }))
        .pipe(gulp.dest('./out'));
});

// SCSS to CSS compilation
gulp.task("scss", function () {
    gulp.src("./css/*.scss")
        .pipe(scss({"bundleExec": false}))
        .pipe(gulp.dest("./css"));
});
