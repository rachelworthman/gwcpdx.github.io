var gulp = require('gulp');
var sass = require('gulp-sass')
var cleanCss = require('gulp-clean-css')
var sourcemaps = require('gulp-sourcemaps')

var browserSync = require('browser-sync').create()

sass.compiler = require('node-sass')


gulp.task('sass', function() {
    // we want to run "sass css/style.scss stylesheet.css --watch"
    return gulp.src('css/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(
            cleanCss({
                compatibility: 'ie8'
            })
        )
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('.'))
        .pipe(browserSync.stream())
})

gulp.task('watch', function(){

    browserSync.init({
        server: {
            baseDir: "."
        }
    })
    gulp.watch('css/style.scss', ['sass'])
})

gulp.task('default', ['sass', 'watch']);