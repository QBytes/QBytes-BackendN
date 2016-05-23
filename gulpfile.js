var gulp    = require('gulp'),
    nodemon = require('gulp-nodemon'),
    eslint  = require('gulp-eslint');

gulp.task('lint', function () {
	return gulp.src(['**/*.js','!node_modules/**'])
		.pipe(eslint())
    .pipe(eslint.format())
   	.pipe(eslint.failAfterError());
});

gulp.task('nodemon', function (cb) {
	
	var started = false;
	
	return nodemon({
		script: 'index.js'
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		if (!started) {
			cb();
			started = true; 
		} 
	});
});

gulp.task('default', ['lint', 'nodemon'], function () {
    // This will only run if the lint task is successful...
});
