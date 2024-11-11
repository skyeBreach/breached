/**
 * @fileoverview This file acts as the main entry point for the "breached-blueprint" command line interface,
 * and is called via the 'breached-blueprint' command
 *
 * @author skyeBreach
 */
import { command, run, string, positional } from 'cmd-ts';

const app = command({
    name: 'breached-blueprint',
    args: {
        someArg: positional({ type: string, displayName: 'some arg' }),
    },
    handler: ({ someArg }) => {
        console.log({ someArg });
    },
});

run(app, process.argv.slice(2)).catch((error: unknown) => {
    throw error;
});
