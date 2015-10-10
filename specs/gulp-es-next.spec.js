'use strict'

import {src, dest, task, watch, $, gulp} from 'gulp-es-next'
import expect from 'expect.js'

describe('gulp-es-next', () => {
	it('should export gulp itself', () => {
		expect(gulp).to.be(require('gulp'))
	})

	it('should export gulp.src method', () => {
		expect(src).to.be(gulp.src)
	})

	it('should export gulp.dest method', () => {
		expect(dest).to.be(gulp.dest)
	})

	it('should export gulp.task method', () => {
		expect(task).to.be(gulp.task)
	})

	it('should export gulp.watch method', () => {
		expect(watch).to.be(gulp.watch)
	})

	it('should load gulp, its methods and plugins with require', () => {
		let gulp = require('gulp-es-next').gulp,
				original = require('gulp')

		expect(gulp.src).to.be(original.src)
		expect(gulp.dest).to.be(original.dest)
		expect(gulp.task).to.be(original.task)
		expect(gulp.watch).to.be(original.watch)

		expect(gulp.$).to.be(require('gulp-load-plugins'))
	})

	it('should export gulp.plugins defined in package.json in the $ object', () => {
		expect($).to.be(require('gulp-load-plugins'))
		expect($.uglify).to.not.be.empty()
		expect($.sourcemaps).to.not.be.empty()
	})
})