var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var concatcss = require('gulp-concat-css');
var uglify = require('gulp-uglify');
var imgmin = require('gulp-imagemin');
var clean = require('gulp-clean');
var inject = require('gulp-inject');
var config = require('./config')();

var path = {
		src: 'src/',
		build: 'build/'
	}
	//clean build folder
gulp.task('clean', function() {
	return gulp.src(path.build)
		.pipe(clean());
});

//concat and minify css
gulp.task('css', ['clean'], function() {
	for (var key in config) {
		gulp.src(config[key].cssSrc)
			.pipe(concatcss(config[key].cssBuild))
			.pipe(rename({
				suffix: '.min'
			}))
			.pipe(minifycss())
			.pipe(gulp.dest(config[key].cssBuildPath));
		gulp.src(path.src + 'css/' + key + '.oldie.css')
			.pipe(rename({
				suffix: '.min'
			}))
			.pipe(minifycss())
			.pipe(gulp.dest(config[key].cssBuildPath));
	}
	gulp.src(path.src + 'css/common.css')
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(minifycss())
		.pipe(gulp.dest(path.build + 'css/'));
});

//check and minify js
gulp.task('js', ['clean'], function() {
	for (var key in config) {
		gulp.src(config[key].jsSrc)
			.pipe(rename({
				suffix: '.min'
			}))
			.pipe(uglify())
			.pipe(gulp.dest(config[key].jsBuildPath));
	}
});
//compress image
gulp.task('imgmin', ['clean'], function() {
	gulp.src(path.src + 'img/*.png', {
			cwd: path.src
		})
		.pipe(imgmin())
		.pipe(gulp.dest(path.build + 'images/'));
});

gulp.task('copy', ['clean'], function() {
	gulp.src(path.src + 'page/*.html')
		.pipe(gulp.dest(path.build + 'page/'));

	gulp.src(path.src + 'js/app.js')
		.pipe(gulp.dest(path.build + 'js/'));

	gulp.src(path.src + 'font/*.font')
		.pipe(gulp.dest(path.build + 'font/'));
});

gulp.task('html', function() {
	for (var key in config) {
		var target = gulp.src('./build/page/' + key + '.html');
		var sources = gulp.src(['./build/js/' + key + '.min.js', './build/css/' + key + '.min.css'], {
			read: false
		});
		var oldie = gulp.src('./build/css/' + key + '.oldie.min.css', {
			read: false
		});
		var common = gulp.src('./build/css/common.min.css', {
			read: false
		});
		//.pipe(inject(gulp.src('./src/importantFile.js', {read: false}), {name: 'head'}))
		target.pipe(inject(common, {
				name: 'common',
				relative: true
			}))
			.pipe(inject(oldie, {
				name: 'oldie',
				relative: true
			}))
			.pipe(inject(sources, {
				relative: true
			}))
			.pipe(gulp.dest('./build/page'));
	}
});
gulp.task('default', ['clean', 'js', 'css', 'imgmin', 'copy']);