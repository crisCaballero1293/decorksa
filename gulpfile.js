const { src, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");

//SASS - TASK
function css(done) {
  src("src/scss/galleryProd.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(dest("./build/css"));
  done();
}

//WATCH -TASK
function dev(done) {
  watch("src/scss/galleryProd.scss", css);
  watch("src/js/**/*.js", javascript);
  done();
}

//JAVASCRIPT
function javascript(done) {
  src("src/js/**/*js").pipe(dest("build/js"));
  done();
}

//IMAGENES - TASK

const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");

function versionWebp(done) {
  const opciones = {
    quality: 50,
  };

  src(". / img / ** / *.{png,jpg,jpeg}").pipe(webp(opciones)).dest("img/");
  done();
}

exports.versionWebp = versionWebp;
exports.css = css;
exports.js = javascript;
exports.dev = parallel(javascript, dev);
