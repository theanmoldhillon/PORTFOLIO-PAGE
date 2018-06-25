var gulp = require('gulp')
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer')

gulp.task('css', function () {
     gulp.src('./*.scss')
     .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
     .pipe(autoprefixer({
        browsers: ['last 10 versions']
    }))
    .pipe(gulp.dest('./css'));
}) 

gulp.task('watch', function() {
    gulp.watch('./sass/**/*.scss',['css'])
})
