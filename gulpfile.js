
var gulp = require('gulp');
var inject = require('gulp-inject');
var wiredep = require('wiredep').stream;
var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var sass = require('gulp-sass');

gulp.task('inject', function () {
	var target = gulp.src('./www/index.html');
  var srcDep = ['./www/scripts/commons/*.js', '!./www/scripts/commons/app.js'];
  var depScripts = gulp.src(srcDep, {read: false}, { cwd: __dirname + '/www'});

  var src = ['./www/**/*.js', '!./www/scripts/commons/*.*'];
	var scripts = gulp.src(src,{read: false}, { cwd: __dirname + '/www'});

	return target
	.pipe(wiredep())
  .pipe(inject(depScripts, {name: 'depscripts'}))
  .pipe(inject(scripts))
	.pipe(gulp.dest('./www/'));
});

gulp.task('sass', function () {
  return gulp.src('./www/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./www/css'));
});

gulp.task('live', function() {

  browserSync.use(browserSyncSpa({
    selector: '[ng-app]'
  }));

  gulp.watch('www/**/*.js', function(event) {
  	gulp.start('inject');
  });

  gulp.watch('www/**/*.html', function(event) {
  	browserSync.reload(event.path);
  });

  gulp.watch(['www/*.html', 'bower.json'], ['inject']);


  browserSync.init({
    server: {
    baseDir: ['www'],
      routes: {
        '/public/components': 'public/components',
        '/www': 'www'
      }
    },
    startPath: '/'
  });
});

gulp.task('script:build', function(){
  return gulp.src('./www/*.html', { searchPath: './www' })
  .pipe(useref())
  .pipe(gulpif('*.js', uglify()))
  .pipe(gulp.dest('./build'));
});
