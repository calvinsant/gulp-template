var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	minifyCss = require('gulp-minify-css');

gulp.task('default', function(){
	console.log('look at my first gulp task!');
});

gulp.task('css',function(){
	//Get css files, minify, concatonate and output
	//Comma separate in src for multiple
	gulp.src(['./src/css/*.css'])
	.pipe(minifyCss())
	.pipe(concat('style.css'))
	.pipe(gulp.dest('./dist/css/'));
})
gulp.task('js', function(){
	gulp.src(['./src/js/*.js'])
	.pipe(uglify())
	.pipe(concat('script.js'))
	.pipe(gulp.dest('./dist/js/'));
})