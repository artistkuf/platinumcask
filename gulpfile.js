var gulp = require("gulp"),
  sass = require("gulp-sass")(require("node-sass")),
  cleancss = require("gulp-clean-css"),
  autoprefixer = require("autoprefixer"),
  rename = require("gulp-rename"),
  sourcemaps = require("gulp-sourcemaps"),
  postcss = require("gulp-postcss"),
  cssnano = require("cssnano"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify");

var sassFiles = "assets/scss/style.scss",
  cssDest = "assets/css/.";

var jsFiles = "assets/js/*.js";
jsDest = "assets/js/.";

function style() {
  return gulp
    .src(sassFiles)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(cssDest));
}

function stylemin() {
  return gulp
    .src(sassFiles)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(rename({ suffix: ".min", prefix: "" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(cleancss({ level: { 1: { specialComments: 0 } } }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(cssDest));
}

function jsmin() {
  return gulp
    .src(jsFiles)
    .pipe(concat("scripts.js"))
    .pipe(uglify())
    .pipe(rename({ extname: ".min.js" }))
    .pipe(gulp.dest(jsDest));
}

gulp.task("style", style);
gulp.task("stylemin", stylemin);
gulp.task("jsmin", jsmin);

var compile = gulp.parallel("style", "stylemin", "jsmin");
gulp.task("compile", compile);

function watch() {
  gulp.watch("assets/scss/**/*.scss", style);
  gulp.watch("assets/scss/**/*.scss", stylemin);
  gulp.watch(jsFiles, jsmin);
  console.log("Watcher launched!");
}

gulp.task("watch", watch);
gulp.task("default", gulp.series("compile", "watch"));
