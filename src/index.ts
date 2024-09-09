import { exec } from 'child_process';
import { Compiler } from 'webpack';

export class ExecPlugin {
    constructor(private command: string) {
    }

    apply(compiler: Compiler) {
        compiler.hooks.done.tap('ExecPlugin', () => {
            exec(this.command, (err: any, stdout: any, stderr: any) => {
                if (err) console.error(err);
                if (stdout) console.log(stdout);
                if (stderr) console.error(stderr);
            });
        });
    }
}
