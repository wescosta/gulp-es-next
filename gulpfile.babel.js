'use strict'

import {src, dest, task, $} from 'gulp-es-next'
import del from 'del'

const path = {
	dist: 'dist/'
}

task('js', ['clean'], () => {
	src('node_modules/gulp-es-next.js')
		.pipe($.rename('index.js'))
		.pipe(dest(path.dist))
})

task('copy', ['clean'], () => {
	src(['license', 'readme.md', 'package.json'])
		.pipe(dest(path.dist))
})

task('clean', done => {
	del('dist').then(() => done())
})

task('build', ['js', 'copy'])