'use strict';

var gulp = require('gulp'),
		glp  = require('gulp-load-plugins')(),
		bs   = require('browser-sync').create();

gulp.task('pug', function () {
	return gulp.src('src/pug/*.pug')
		.pipe(glp.pug({
			pretty:true
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('stylus', function () {
	return gulp.src('src/stylus/*.styl')
		.pipe(glp.sourcemaps.init())
		.pipe(glp.stylus({
			'include css': true
		}))
		.pipe(glp.autoprefixer({
			browsers: ['last 10 versions'],
			cascade: false
		}))
		.on("error", glp.notify.onError({
			title: "Stylus error"
		}))
		.pipe(glp.csso())
		.pipe(glp.sourcemaps.write())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('bs', function() {
	browserSync.init({
		server: {
			baseDir: "./dist"
		}
	});
	browserSync.watch('dist', browserSync.reload)
});

gulp.task('watch', function () {
	gulp.watch('src/pug/*.pug', gulp.series('pug'));
	gulp.watch('src/stylus/*.styl', gulp.series('stylus'));
});