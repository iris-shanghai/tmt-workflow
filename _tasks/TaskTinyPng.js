var util = require('./lib/util');
var del = require('del');
var tinypng = require('gulp-tinypng');


module.exports = function (gulp, config) {

    //清除目标目录
    function delDist() {
        return del(['./gulp']);
    }
    function tinyPNG(){
      return gulp.src('dist/img/*')
        .pipe(tinypng('UrbzvfYcGCxnwR5CXf-yaCL1FHcAKvA3'))
    		.pipe(gulp.dest('dist/img/'));
    }


    gulp.task('tinyPNG', gulp.series(
          tinyPNG
      ));
};
