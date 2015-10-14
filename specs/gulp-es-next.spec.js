'use strict'

import {src, dest, task, watch, $, gulp} from 'gulp-es-next'
import expect from 'expect.js'

describe('gulp-es-next', () => {
	it('should export gulp itself', () => {
		expect(gulp).to.be.ok(require('gulp'))

		expect(gulp).to.have.property('src')
		expect(gulp).to.have.property('dest')
		expect(gulp).to.have.property('task')
		expect(gulp).to.have.property('watch')
	})

	it('should export gulp.src method', () => {
		expect(src).to.be.ok(gulp.src)
	})

	it('should export gulp.dest method', () => {
		expect(dest).to.be.ok(gulp.dest)
	})

	it('should export gulp.task method', () => {
		expect(task).to.be.ok(gulp.task)
	})

	it('should export gulp.watch method', () => {
		expect(watch).to.be.ok(gulp.watch)
	})

	it('should load gulp, its methods and plugins with require', () => {
		let _ = require('gulp-es-next'),
				gulp = require('gulp')

		expect(_.gulp.src).to.be.ok(gulp.src)
		expect(_.gulp.dest).to.be.ok(gulp.dest)
		expect(_.gulp.task).to.be.ok(gulp.task)
		expect(_.gulp.watch).to.be.ok(gulp.watch)

		expect(_.$).to.eql(require('gulp-load-plugins')())
	})

	it('should export gulp.plugins defined in package.json in the $ object', () => {
		expect($.uglify).to.be.a('function')
		expect($.sourcemaps).to.be.ok()
	})
})