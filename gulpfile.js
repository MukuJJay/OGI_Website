const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

//sass task
function scssTask(){
    return src('./src/scss/main.scss', {sourcemaps: true})
        .pipe(sass()).pipe(postcss([cssnano()]))
            .pipe(dest ('dest/css', {sourcemaps: '.'}));
}

//js tasks
function jsTask(){
    return src('src/js/**/*.js', {sourcemaps: true})
        .pipe(terser())
            .pipe(dest ('dest/js', {sourcemaps: '.'}));
}

//browsersync tasks
function browsersyncServe(cb){
    browsersync.init({
        server: {
            baseDir: '.'
        },
        port: 3001,
    });
    cb();
}

function browsersyncReload(cb){
    browsersync.reload();
    cb();
}

//watch task
function watchTask(){
    watch('*.html', browsersyncReload);
    watch(['src/scss/**/*.scss', 'src/js/**/*.js'], series(scssTask, jsTask, browsersyncReload));
}

//default gulp task
exports.default = series(
    scssTask,
    jsTask,
    browsersyncServe,
    watchTask
);

