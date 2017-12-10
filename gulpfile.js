var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	minifyCss = require('gulp-clean-css'),
	sourceMaps = require('gulp-sourcemaps');

gulp.task('default', function(){
	gulp.run('js','css');
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
	gulp.run('default');
	gulp.watch('./src/css/*', function(){
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
		gulp.run('css');
	});
	gulp.watch('./src/js/*', function(){
		console.log('File ' + event.path + ' was ' + event.type + ', running task...');
	});
});