var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	minifyCss = require('gulp-clean-css'),
	sourceMaps = require('gulp-sourcemaps'),
	watch = require('gulp-watch');

gulp.task('default', function(){
	gulp.start('js','css');
});

gulp.task('css',function(){
	//Get css files, minify, concatonate and output
	//Comma separate in src for multiple
	gulp.src(['./src/css/*.css'])
	.pipe(sourceMaps.init())
	.pipe(minifyCss())
	.pipe(concat('style.css'))
	.pipe(sourceMaps.write())
	.pipe(gulp.dest('./dist/css/'));
});
gulp.task('js', function(){
	gulp.src(['./src/js/*.js'])
	.pipe(uglify())
	.pipe(concat('script.js'))
	.pipe(gulp.dest('./dist/js/'));
});

gulp.task('watch', function(){
	gulp.start('default');
	gulp.watch('./src/css/*.css', ['css']);
	gulp.watch('./src/js/*', ['js']);
});