"use strict";
//~ ---------------------------------------------------------------------------------------------------------------- ~//
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonPatterns = void 0;
// File and Directory Constants
/** Common glob patterns that are being reused */
exports.commonPatterns = {
    allDirectories: '**/*',
    dotFile: '.*',
    fileExtensions: {
        javascript: '.{js,jsx,mjs}',
        typescript: '.{ts,tsx,mts}',
    },
};
//~ ---------------------------------------------------------------------------------------------------------------- ~//
