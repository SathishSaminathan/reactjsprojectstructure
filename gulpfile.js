var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');

var paths = {
    scss: ['./src/**/*.scss'],
    build: ['build'],
    node_modules: ['node_modules']
};

gulp.task('Delete_Build_Folder', function () {
    return del('build');
});

gulp.task('Delete_Node_Module', function () {
    return del('node_modules');
});

gulp.task('Generate_CSS', function () {
    return gulp.src(paths.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src'));
});

gulp.task('Watch_SASS_Changes', function () {
    gulp.watch(paths.scss, ['Generate_CSS']);
});