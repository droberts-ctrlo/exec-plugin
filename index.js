const { exec } = require('child_process');

class ExecPlugin {
    constructor(command) {
        this.command = command;
    }

    apply(compiler) {
        compiler.hooks.done.tap('ExecPlugin', () => {
            exec(command, (err, stdout, stderr) => {
                if (err) console.error(err);
                if (stdout) console.log(stdout);
                if (stderr) console.error(stderr);
            });
        });
    }
}

module.exports = ExecPlugin;
