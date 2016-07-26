var gulp = require('gulp'),
  sass = require('gulp-sass'),
  cssnano = require('gulp-cssnano'),
  rename = require('gulp-rename'),
  browserSync = require('browser-sync').create(),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  nodemon = require('nodemon');


/*
*   Compile Sass
*/
gulp.task('sass', function() {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(cssnano({ safe: true }))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream());
});

/*
*   Scripts
*/
gulp.task('scripts', function() {
  return browserify('./src/app/app.js')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/js'));
});
gulp.task('scripts-watch', ['scripts'], browserSync.reload);

/*
*   Watch
*/
gulp.task('serve', ['nodemon'], function() {
  browserSync.init({
    proxy: {
      target: 'http://localhost:3000',
      proxyReq: [
        function(proxyReq) {
          proxyReq.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
          proxyReq.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
          proxyReq.setHeader('Access-Control-Allow-Origin', '*');
        }
      ]
    },
    port: 5000
  });
  gulp.watch('./src/sass/*.scss', ['sass']);
  gulp.watch('./src/app/**/*.js', ['scripts-watch']);
  gulp.watch('./public/**/*.html').on('change', browserSync.reload);
});

gulp.task('nodemon', ['sass', 'scripts'], function(cb) {
  var started = false;

  return nodemon({
    script: 'server/server.js'
  }).on('start', function() {
    if (!started) {
      cb();
      started = true;
    }
  });
});
