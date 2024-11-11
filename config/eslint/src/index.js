"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefineConfig = exports.configs = void 0;
var base_js_1 = require("./config/base.js");
//~ ---------------------------------------------------------------------------------------------------------------- ~//
// Config File Exports
/** Export an object that contains all flattened configs */
exports.configs = {
    base: base_js_1.base,
};
//~ ---------------------------------------------------------------------------------------------------------------- ~//
// Utility Exports
/** Export all solo config utility functions */
var config_js_1 = require("./utils/config.js");
Object.defineProperty(exports, "DefineConfig", { enumerable: true, get: function () { return config_js_1.DefineConfig; } });
//~ ---------------------------------------------------------------------------------------------------------------- ~//
