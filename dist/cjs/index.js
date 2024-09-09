"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecPlugin = void 0;
const child_process_1 = require("child_process");
class ExecPlugin {
    command;
    constructor(command) {
        this.command = command;
    }
    apply(compiler) {
        compiler.hooks.done.tap('ExecPlugin', () => {
            (0, child_process_1.exec)(this.command, (err, stdout, stderr) => {
                if (err)
                    console.error(err);
                if (stdout)
                    console.log(stdout);
                if (stderr)
                    console.error(stderr);
            });
        });
    }
}
exports.ExecPlugin = ExecPlugin;
