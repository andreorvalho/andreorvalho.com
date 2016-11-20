var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// source and distribution folder
var source = 'app/assets/stylesheets/',
    dest = 'public/assets/';

// Bootstrap scss source
var bootstrapSass = {
        in: 'node_modules/bootstrap-sass/'
    };

// Font awesome source
var fontAwesome = {
        in: 'node_modules/font-awesome/'
    };

// Fonts source
var fonts = {
      in: [ source + 'fonts/*.*',
            bootstrapSass.in + 'assets/fonts/**/*',
            fontAwesome.in + '/fonts/**/*' ],
      out: dest + 'fonts/'
    };

// Our scss source folder: .scss files
var scss = {
    in: source + 'application.css.scss',
    out: dest + 'css/',
    watch: source + '/**/*.scss',
    sassOpts: {
        outputStyle: 'nested',
        precison: 3,
        errLogToConsole: true,
        includePaths: [ bootstrapSass.in + 'assets/stylesheets',
                        fontAwesome.in + 'css' ]
    }
};

gulp.task('fonts', function () {
    gulp.src(fonts.in)
        .pipe(gulp.dest(fonts.out));
});

gulp.task('sass', ['fonts'], function () {
    gulp.src(scss.in)
        .pipe(sourcemaps.init())
        .pipe(sass(scss.sassOpts))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(scss.out));
});

// default task
gulp.task('default', ['sass']);

gulp.task('sass:watch', function () {
  gulp.watch(scss.watch, ['sass']);
});
