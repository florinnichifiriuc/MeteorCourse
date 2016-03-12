var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var filesToWatch =[
"./**/*.css",
"./**/*.js",
"./**/*.html"
];
// Static Server + watching css/js/html files
gulp.task('serve',  function() {

    browserSync.init({
        server: "."
    });

    gulp.watch(filesToWatch).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);