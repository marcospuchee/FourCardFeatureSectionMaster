
const { src, dest, watch } = require('gulp');
const css = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

function compile( done ) {

    src('src/scss/**/*.scss')
        .pipe( plumber() )
        .pipe( css() )
        .pipe(dest('build/scss'));

    done();
}

function dev( done ){
    watch('src/scss/**/*.scss', compile);

    done();
}

exports.compile = compile;
exports.dev = dev;