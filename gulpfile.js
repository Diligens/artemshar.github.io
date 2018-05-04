'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    browserSync = require('browser-sync');

var path = {
    dev: { // Откуда берём файлы для обработки
        style: 'scss/main.scss'
    },
    prod: { // Куда складываем файлы после обработки Gulp'ом
        style: 'css'
    },
    watch: { // За изменением каких файлов наблюдаем (для автоматического запуска тасков)
        style: 'scss/**',
        html: 'index.html'
    }
};

// === Config browserSync
var config = {
    server: {
        baseDir: "./"
    },
    tunnel: "lalalala",
    host: '127.0.0.1',
    port: 80,
    open: true
};

gulp.task('style:build', function() {
    gulp.src(path.dev.style)
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(path.prod.style));
    browserSync.reload();
});

gulp.task('html:build', function () {
    // что-то делать с html, пока не нужно
    browserSync.reload();
});


gulp.task('build', [
    'style:build'
]);

gulp.task('watch', function() {
    gulp.watch([path.watch.style], function() {
        gulp.start('style:build');
    });
    gulp.watch([path.watch.html], function() {
        gulp.start('html:build');
    });
});

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('default', ['build', 'webserver', 'watch']);