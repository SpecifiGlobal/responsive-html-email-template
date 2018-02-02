var gulp = require('gulp'),
    scss = require("gulp-scss"),
    inlinesource = require('gulp-inline-source'),
    inlineCss = require('gulp-inline-css');

gulp.task('default', [ 'inlinecss' ]);

// Inline CSS rules in HTML file
gulp.task('inlinecss', [ 'inlinesource' ], function() {
    return gulp.src('./out/*.html')
        .pipe(inlineCss({ preserveMediaQueries: true }))
        .pipe(gulp.dest('./out'));
});

// inline styles, javascript etc via Gulp
gulp.task('inlinesource', [ 'scss' ], function () {
    return gulp.src('./src/*.html')
        .pipe(inlinesource({
            compress: false
        }))
        .pipe(gulp.dest('./out'));
});

// SCSS to CSS compilation
gulp.task("scss", function () {
    return gulp.src("./css/*.scss")
        .pipe(scss({"bundleExec": false}))
        .pipe(gulp.dest("./css"));
});
