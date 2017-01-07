/// <reference types="node" />

namespace Tasks {
	"use strict";

	interface ITaskUtility {
		/* Single tasks */
		setupSassCompilationTask: () => void;
		setupTypeScriptLintingTask: () => void;
		setupTypeScriptCompilationTask: () => void;
		setupWatcher: () => void;

		/* Task chaining */
		defaultChain: () => void;
	}

	export class TaskUtility implements ITaskUtility {
		constructor(
			private gulp,
			private ts,
			private tslint,
			private sass
		) {
			/* Single tasks */
			this.setupSassCompilationTask();
			this.setupTypeScriptLintingTask();
			this.setupTypeScriptCompilationTask();
			this.setupWatcher();

			/* Task chaining */
			this.defaultChain();
		}

		/* Single tasks */
		public setupSassCompilationTask() {
			this.gulp.task("COMPILE: SASS", () => {
				return this.gulp
					.src([
						"Source/app.scss"
					])
					.pipe(this.sass({ outputStyle: "compressed" }))
					.pipe(this.gulp.dest("."));
			});
		}
		public setupTypeScriptLintingTask() {
			this.gulp.task("LINT: TypeScript", () => {
				return this.gulp
					.src(["Source/**/*.ts"])
					.pipe(this.tslint({
						formatter: "verbose"
					}))
					.pipe(this.tslint.report());
			});
		}
		public setupTypeScriptCompilationTask() {
			let tsProject = this.ts.createProject("tsconfig.json");
			this.gulp.task("COMPILE: TypeScript", ["LINT: TypeScript"], () => {
				return this.gulp.src(
					[
						"Source/**/*.ts"
					],
					{
						base: "."
					}
				)
					.pipe(tsProject())
					.pipe(this.gulp.dest("."));
			});
		}
		public setupWatcher() {
			this.gulp.task("WATCHER", () => {
				// Typescript files
				this.gulp.watch(
					["Source/**/*.ts"],
					{ cwd: "." },
					() => {
						this.gulp.run("COMPILE: TypeScript");
					}
				);
				// Typescript files
				this.gulp.watch(
					["Source/**/*.scss"],
					{ cwd: "." },
					() => {
						this.gulp.run("COMPILE: SASS");
					}
				);
			});
		}

		/* Task chaining */
		public defaultChain() {
			this.gulp.task("default", [
				"COMPILE: SASS",
				"COMPILE: TypeScript",
				"WATCHER"
			]);
		}
	}

}

// Loading npm deps
let gulp = require("gulp"),
	ts = require("gulp-typescript"),
	tslint = require("gulp-tslint"),
	sass = require("gulp-sass");

const TaskUtility = new Tasks.TaskUtility(
	gulp,
	ts,
	tslint,
	sass
);