const gulp = require("gulp")
const gulpBabel = require("gulp-babel")
const gulpUglify = require("gulp-uglify")
const exec = require('child_process').exec
const gulpNodemon = require("gulp-nodemon")

gulp.task("build", async ()=>{
    gulp.src("./src/*")
        .pipe(gulpBabel({
            presets:["@babel/env"],
            plugins: ['@babel/transform-runtime']
        }))
        .pipe(gulpUglify({}))
        .pipe(gulp.dest("./build/"))
})

gulp.task("dev", async()=>{
    gulpNodemon({
        script:"./build/app.js",
        watch: ["./src/*", "./src/**/*"],
        ext:"js",
        tasks: ["build"]
    })
})