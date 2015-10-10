'use strict'

import {src, dest, task, $} from 'gulp-es-next'
import del from 'del'

task('transpile', ['clean'], () => {
	src('node_modules/gulp-es-next.js')
		.pipe($.sourcemaps.init())
		.pipe(dest('dist/'))
		.pipe($.uglify())
		.pipe($.rename({suffix: '.min'}))
		.pipe(dest('dist/'))
		.pipe($.rename({suffix: '.map'}))
		.pipe($.sourcemaps.write('.'))
		.pipe(dest('dist/'))
})

task('clean', done => {
	del('dist').then(() => done())
})

task('default', ['transpile'])