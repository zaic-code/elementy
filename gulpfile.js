const gulp = require('gulp');
const stylus = require('gulp-stylus');
const overrideBrowserslist = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();




function styl(){
    return gulp.src('./src/stylus/*.styl')
            .pipe(stylus())
            .pipe(overrideBrowserslist({
                browsers: ['<0.001%'],
                cascade: true
            }))                       
            .pipe(gulp.dest('./app/css'))
            .pipe(browserSync.stream());  
            
}


function start (){
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
    gulp.watch('./src/stylus/*.styl', styl);
    gulp.watch("./app/*.html").on('change', browserSync.reload);
}



gulp.task('start', start);