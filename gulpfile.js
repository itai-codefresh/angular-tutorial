var gulp       = require('gulp');
var typescript = require('gulp-tsc');
var tsconfig   = require('./tsconfig.json');
var exec       = require('gulp-exec');
var watch      = require('gulp-watch');


gulp.task('compile', function () {
	var options       = {
		continueOnError: false, // default = false, true means don't emit error event
		pipeStdout: false, // default = false, true means stdout is written to file.contents
		customTemplatingThing: "test" // content passed to gutil.template()
	};
	var reportOptions = {
		err: true, // default = true, false means don't write err
		stderr: true, // default = true, false means don't write stderr
		stdout: true // default = true, false means don't write stdout
	}
	gulp.src('./**/**')
		.pipe(exec('tsc', options))
		.pipe(exec.reporter(reportOptions));
});

gulp.task('default', function () {
	gulp.watch('app/**/*.ts', ['compile'])
});