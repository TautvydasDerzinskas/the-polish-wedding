/// <reference types="node" />
var Tasks;
(function (Tasks) {
    "use strict";
    var TaskUtility = (function () {
        function TaskUtility(gulp, ts, tslint, sass) {
            this.gulp = gulp;
            this.ts = ts;
            this.tslint = tslint;
            this.sass = sass;
            /* Single tasks */
            this.setupSassCompilationTask();
            this.setupTypeScriptLintingTask();
            this.setupTypeScriptCompilationTask();
            this.setupWatcher();
            /* Task chaining */
            this.defaultChain();
        }
        /* Single tasks */
        TaskUtility.prototype.setupSassCompilationTask = function () {
            var _this = this;
            this.gulp.task("COMPILE: SASS", function () {
                return _this.gulp
                    .src([
                    "Source/app.scss"
                ])
                    .pipe(_this.sass({ outputStyle: "compressed" }))
                    .pipe(_this.gulp.dest("."));
            });
        };
        TaskUtility.prototype.setupTypeScriptLintingTask = function () {
            var _this = this;
            this.gulp.task("LINT: TypeScript", function () {
                return _this.gulp
                    .src(["Source/**/*.ts"])
                    .pipe(_this.tslint({
                    formatter: "verbose"
                }))
                    .pipe(_this.tslint.report());
            });
        };
        TaskUtility.prototype.setupTypeScriptCompilationTask = function () {
            var _this = this;
            var tsProject = this.ts.createProject("tsconfig.json");
            this.gulp.task("COMPILE: TypeScript", ["LINT: TypeScript"], function () {
                return _this.gulp.src([
                    "Source/**/*.ts"
                ], {
                    base: "."
                })
                    .pipe(tsProject())
                    .pipe(_this.gulp.dest("."));
            });
        };
        TaskUtility.prototype.setupWatcher = function () {
            var _this = this;
            this.gulp.task("WATCHER", function () {
                // Typescript files
                _this.gulp.watch(["Source/**/*.ts"], { cwd: "." }, function () {
                    _this.gulp.run("COMPILE: TypeScript");
                });
                // Typescript files
                _this.gulp.watch(["Source/**/*.scss"], { cwd: "." }, function () {
                    _this.gulp.run("COMPILE: SASS");
                });
            });
        };
        /* Task chaining */
        TaskUtility.prototype.defaultChain = function () {
            this.gulp.task("default", [
                "COMPILE: SASS",
                "COMPILE: TypeScript",
                "WATCHER"
            ]);
        };
        return TaskUtility;
    }());
    Tasks.TaskUtility = TaskUtility;
})(Tasks || (Tasks = {}));
// Loading npm deps
var gulp = require("gulp"), ts = require("gulp-typescript"), tslint = require("gulp-tslint"), sass = require("gulp-sass");
var TaskUtility = new Tasks.TaskUtility(gulp, ts, tslint, sass);
