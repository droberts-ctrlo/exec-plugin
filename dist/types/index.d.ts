import { Compiler } from 'webpack';
export declare class ExecPlugin {
    private command;
    constructor(command: string);
    apply(compiler: Compiler): void;
}
