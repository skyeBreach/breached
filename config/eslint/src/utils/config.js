"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefineConfig = void 0;
var typescript_eslint_1 = require("typescript-eslint");
//~ ---------------------------------------------------------------------------------------------------------------- ~//
// Config Definition Utils
/**
 * Takes in an object or generator that defines a specific eslint config
 * @param inConfig - Object or generator that defines this config
 * @returns Flattened config that can be exported to eslint
 */
var DefineConfig = function (inConfig) {
    // If param is generator then run generator and flatten the response
    if (typeof inConfig === 'function')
        return typescript_eslint_1.config.apply(void 0, inConfig());
    // If param is config block return the flattened config
    return typescript_eslint_1.config.apply(void 0, inConfig);
};
exports.DefineConfig = DefineConfig;
//~ ---------------------------------------------------------------------------------------------------------------- ~//
