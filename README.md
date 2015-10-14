# gulp-es-next
[![Build Status](https://travis-ci.org/wesleyanemam/gulp-es-next.svg)](https://travis-ci.org/wesleyanemam/gulp-es-next) [![Test Coverage](https://codeclimate.com/github/wesleyanemam/gulp-es-next/badges/coverage.svg)](https://codeclimate.com/github/wesleyanemam/gulp-es-next/coverage) [![Code Climate](https://codeclimate.com/github/wesleyanemam/gulp-es-next/badges/gpa.svg)](https://codeclimate.com/github/wesleyanemam/gulp-es-next)

Exports gulp's methods and pluings in a more ES6 way. Great to use within gupfile.babel.js

# ES6 with Gulp

To enable ES6 with gulp, [simply rename the gulpfile.js to gulpfile.babel.js and install babel-core](https://gist.github.com/stephensauceda/ce81e95c6f6c5747d8aa). The following command does that. (On Windows you can run that in GitBash) ;)

```shellscript
mv gulpfile.js gulpfile.babel.js && npm i -D babel-core
```

Then you are ready to start writting your build script with ES6. \o/

# Importing gulp methods and plugins
First install gulp-es-next, then import gulp methods and plugins within one line in the gupfile.babel.js file

```shellscript
npm i -D gulp-es-next
```

```javascript
import {src, dest, task, watch, $, gulp} from 'gulp-es-next'
```

Notice that those are all pieces you can import from gulp-es-next. But you may not need them all. So, I'd suggest to import only what you need. ;)

Check the demo bellow, it does not import them all

# Demo of gupfile.babel.js with gulp-es-next

```javascript
import {src, dest, task, watch, $} from 'gulp-es-next'
import del from 'del'

task('transpile', ['clean'], () => {
	src('scripts/*.js')
		.pipe($.sourcemaps.init())
		.pipe($.uglify())
		.pipe($.rename({suffix: '.min'}))
		.pipe(dest('dist/'))
		.pipe($.sourcemaps.write('.'))
		.pipe(dest('dist/'))
})

task('clean', done => {
	del('dist').then(() => done())
})

task('watch', () => watch('scripts/*.js', [transpile]))

task('default', ['watch'])
```

# Real use of gulp-es-next
This project is the first one to use gulp-es-next itself. Check out the [gulpfile.babel.js](gulpfile.babel.js) file and also the tests in [gulp-es-next.spec.js](specs/gulp-es-next.spec.js).