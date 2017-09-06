var gulp = require('gulp'),
	prefixer = require('gulp-autoprefixer'),
	browserify = require('browserify'),
	uglify = require('gulp-uglify'),
	source = require('vinyl-source-stream'),
	brfs = require('brfs'),
	fs = require('fs'),
	buffer = require('vinyl-buffer'),
	marked = require('marked'),
	htmlToJson = require('./html-to-json.js'),
	sass = require('gulp-sass'),
	gulpIf = require('gulp-if'),
	webserver = require('gulp-webserver');

var path = require('path');

gulp.task('sass', function () {
	gulp
		.src('scss/rosetta-stone.scss')
		.pipe(sass({
			paths: ['scss']
		}))
		.pipe(prefixer('last 2 versions', 'ie 9'))
		.pipe(gulp.dest('./css'));
});

gulp.task('markdown-to-json', function (cb) {
	var source = fs.readFileSync('rosetta-stone.md', 'utf8')
	var originalHTML = marked(source)
	htmlToJson(originalHTML, function(data){
		fs.writeFileSync('json/rosetta-stone.json', JSON.stringify({sections: data}, null, 2));
		cb()
	})
});

// Browserify our code
// Since we the JSON is incorporated into our browserify bundle we depend on it.
gulp.task('js', ['markdown-to-json'], function() {
	// Browserify/bundle the JS.
	browserify({
		entries: './js/src/index.js',
		insertGlobals : true,
		fullPaths: true, // For discify
		debug: ! gulp.env.production
	}).bundle()
		.pipe(source('index.js'))
		.pipe(buffer())
		.pipe(gulpIf(gulp.env.production, uglify()))
		.pipe(gulp.dest('./js/dist'))

});

gulp.task('webserver', function() {
	gulp.src('./')
		.pipe(webserver({
			livereload: true,
			port: 7777,
			fallback: 'html/index.html',
			open: true
		}));
});

// The default task (called when you run `gulp`)
gulp.task('default', ['markdown-to-json', 'js', 'sass', 'webserver'], function() {
	// Watch files and run tasks if they change
	gulp.watch('./scss/*.scss', ['sass']);
	gulp.watch('./js/src/*.js', ['js']);
});

