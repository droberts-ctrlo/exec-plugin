import { exec } from 'child_process';
export class ExecPlugin {
    command;
    constructor(command) {
        this.command = command;
    }
    apply(compiler) {
        compiler.hooks.done.tap('ExecPlugin', () => {
            exec(this.command, (err, stdout, stderr) => {
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
