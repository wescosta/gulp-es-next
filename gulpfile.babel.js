'use strict'

import {src, dest, task, watch, $} from 'gulp-es-next'
import {del} from 'del'

task('transpile', ['clean'], () => {
	src('node_modules/gulp-es-next.js')
		.pipe($.sourcemaps.init())
		.pipe($.babel())
		.pipe(dest('dist/'))
		.pipe($.uglify())
		.pipe($.rename({suffix: '.min'}))
		.pipe(dest('dist/'))
		.pipe($.rename({suffix: '.map'}))
		.pipe($.sourcemaps.write('.'))
		.pipe(dest('dist/'))
})

task('test', () => {
	src('specs/**/*.spec.js')
		.pipe($.babel())
		.pipe($.jasmine())
})

task('clean', done => {
	del('dist').then(() => done())
})

task('build', ['transpile'])