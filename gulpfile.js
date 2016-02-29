var gulp = require('gulp'),
  $ = require('gulp-load-plugins')(),
  rimraf = require('rimraf');

var paths = {
  js: [
    'src/js/app/module.js',
    'src/js/auth/module.js',
    'src/js/**/*.js'
  ],
  sass: 'src/scss/app.scss',
  sassTheme: 'src/scss/theme.scss',
  jade: 'src/jade/**/*.jade',

  dist: 'www/',
  imgs: 'src/imgs/**/*',

  fonts: [
    'bower_components/ionic/release/fonts/*.woff'
  ],

  cssLibs: [
    'bower_components/animate.css/animate.min.css'
  ],

  jsLibs: [
    'src/libs/winstore-jscompat.js',
    'bower_components/ionic/release/js/ionic.bundle.min.js',
    'bower_components/angular-i18n/angular-locale_pt-br.js',
    'bower_components/lunr.js/lunr.min.js',
    'bower_components/underscore/underscore-min.js',
    'bower_components/moment/min/moment.min.js',
    'bower_components/ngCordova/dist/ng-cordova.min.js',
    'bower_components/ngstorage/ngStorage.min.js',
    'bower_components/onezone-datepicker/dist/onezone-datepicker.min.js',
    'bower_components/ionic-filter-bar/dist/ionic.filter.bar.min.js',
    'bower_components/angular-ui-mask/dist/mask.min.js'
  ]
};

//CLEAN
gulp.task('clean', cb => rimraf(paths.dist, cb));

//LIBS
gulp.task('css:libs', () =>
  gulp.src(paths.cssLibs)
  .pipe($.concat('libs.min.css'))
  .pipe(gulp.dest(paths.dist + 'css')));

gulp.task("js:libs", () =>
  gulp.src(paths.jsLibs)
  .pipe($.concat("libs.min.js"))
  .pipe(gulp.dest(paths.dist + "js")));

gulp.task('imgs', () =>
  gulp.src(paths.imgs)
  .pipe(gulp.dest(paths.dist + 'imgs')));

gulp.task('fonts', () =>
  gulp.src(paths.fonts)
  .pipe(gulp.dest(paths.dist + 'fonts')));

gulp.task('libs', ['css:libs', 'js:libs', 'imgs', 'fonts', 'sass:theme']);

//SASS
gulp.task("sass", () =>
  gulp.src(paths.sass)
  .pipe($.sourcemaps.init())
  .pipe($.sass({
    outputStyle: "compressed"
  }).on('error', $.sass.logError))
  .pipe($.autoprefixer({
    browsers: ["last 2 versions", "ie >= 9"]
  }))
  .pipe($.sourcemaps.write())
  .pipe(gulp.dest(paths.dist + 'css')));

//SASS Theme
gulp.task("sass:theme", () =>
  gulp.src(paths.sassTheme)
  .pipe($.sourcemaps.init())
  .pipe($.sass({
    outputStyle: "compressed"
  }).on('error', $.sass.logError))
  .pipe($.autoprefixer({
    browsers: ["last 2 versions", "ie >= 9"]
  }))
  .pipe($.sourcemaps.write())
  .pipe(gulp.dest(paths.dist + 'css')));

//JADE
gulp.task('jade', () =>
  gulp.src(paths.jade)
  .pipe($.jade({
    pretty: true
  }))
  .pipe(gulp.dest(paths.dist)));

//JS
gulp.task('js:hint', () =>
  gulp.src(paths.js)
  .pipe($.jshint())
  .pipe($.jshint.reporter('default')));

gulp.task('js', ['js:hint'], () =>
  gulp.src(paths.js)
  .pipe($.sourcemaps.init())
  .pipe($.concat('all.min.js'))
  .pipe($.babel({
    presets: ['es2015']
  }))
  .pipe($.uglify())
  .pipe($.sourcemaps.write())
  .pipe(gulp.dest(paths.dist + 'js')));

gulp.task('watch', function() {
  gulp.watch(['src/scss/**/*.scss', '!src/scss/**/theme.scss'], ['sass']);
  gulp.watch(['src/scss/**/theme.scss', 'src/scss/**/_variables.scss'], ['sass:theme']);
  gulp.watch(paths.jade, ['jade']);
  gulp.watch(paths.js, ['js']);
});

gulp.task('compile', ['libs', 'jade', 'sass', 'js']);
gulp.task('default', ['compile', 'watch']);