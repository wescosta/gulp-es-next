'use strict'

import {src, dest, task, watch, $, gulp} from 'gulp-es-next'

define('gulp-es-next', function(){
	it('should export gulp\'s methods', function(){
		expect(src).toBe(gulp.src)
		expect(dest).toBe(gulp.dest)
		expect(task).toBe(gulp.task)
		expect(watch).toBe(gulp.watch)
	})

	it('should export gulp\'s plugins in the $ object', function(){
		expect($).toBe(require('gulp-load-plugins'))
		expect($.babel).toBeDefined()
		expect($.uglify).toBeDefined()
		expect($.jasmine).toBeDefined()
	})

	it('should export gulp itself', function(){
		expect(gulp).toBe(require('gulp'))
	})

	it('should also load gulp, its methods and plugins with require', function(){
		var gulp = require('gulp-es-next'),
				original = require('gulp')

		expect(gulp.src).toBe(original.src)
		expect(gulp.dest).toBe(original.dest)
		expect(gulp.task).toBe(original.task)
		expect(gulp.watch).toBe(original.watch)

		expect(gulp.$).toBe(require('gulp-load-plugins'))
	})
})