var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var cssimport = require("gulp-cssimport");

// source and distribution folder
var source = 'app/assets/stylesheets/';
var dest = 'public/assets/';

// Bootstrap scss source
var bootstrapSass = {
  in: 'node_modules/bootstrap-sass/'
};

// Font awesome source
var fontAwesome = {
  in: 'node_modules/font-awesome/'
};

// Our scss source folder: .scss files
var scss = {
  in: source + 'assets.css.scss',
  out: dest + 'css/',
  watch: [ source + '/**/*.scss',
           "!" + source + "/application.css.scss"],
  sassOpts: {
    outputStyle: 'nested',
    precison: 3,
    errLogToConsole: true,
    includePaths: [ bootstrapSass.in + 'assets/stylesheets',
                    fontAwesome.in + 'css' ]
  }
};

var cssImportOpts = {
  filter: /^https:\/\//gi // process only http urls
};


gulp.task('sass', function () {
  gulp.src(scss.in)
  .pipe(rename('application'))
  .pipe(sourcemaps.init())
  .pipe(sass(scss.sassOpts))
  .pipe(cleanCSS())
  .pipe(cssimport(cssImportOpts))
  .pipe(rename({ suffix: '.min'}))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(scss.out));
});

// default task
gulp.task('default', ['sass']);

gulp.task('sass:watch', function () {
  gulp.watch(scss.watch, ['sass']);
});
