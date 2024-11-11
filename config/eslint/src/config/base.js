"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.base = void 0;
var config_js_1 = require("../utils/config.js");
var js_1 = require("@eslint/js");
var typescript_eslint_1 = require("typescript-eslint");
var eslint_plugin_turbo_1 = require("eslint-plugin-turbo");
var recommended_1 = require("eslint-plugin-prettier/recommended");
var configs_1 = require("@eslint-community/eslint-plugin-eslint-comments/configs");
var globals_1 = require("globals");
/** Defines the flattened config for the base eslint config */
exports.base = (0, config_js_1.DefineConfig)(__spreadArray(__spreadArray(__spreadArray([
    // Glob patterns that this config will ignore
    {
        ignores: ['.next', 'build', 'storybook-static'],
    },
    // Base configuration for javascript and typescript
    js_1.default.configs.recommended
], typescript_eslint_1.default.configs.strictTypeChecked, true), typescript_eslint_1.default.configs.stylisticTypeChecked, true), [
    // Configuration for turbo
    {
        // Import the turbo plugin
        plugins: {
            turbo: eslint_plugin_turbo_1.default,
        },
        // Import/Customise the turbo plugins rule set
        rules: __assign({}, eslint_plugin_turbo_1.default.configs.recommended.rules),
    },
    // Configuration for prettier to disable conflicting rules, imports the config and plugin
    recommended_1.default,
    {
        rules: {
            'prettier/prettier': [
                'error',
                {
                    singleQuote: true,
                    endOfLine: 'auto',
                    printWidth: 120,
                    tabWidth: 4,
                },
            ],
        },
    },
    // Additional rules for ESLint directive comments
    configs_1.default.recommended,
    // Config general options
    {
        // Options relating to the linter process
        linterOptions: {
            // Warn when the are disable directive comments that are unused
            reportUnusedDisableDirectives: true,
        },
        // Settings related to how all files are configured for linting
        languageOptions: {
            // Specify that we are using the 'typescript-eslint' parser
            parser: typescript_eslint_1.default.parser,
            // Additional options that are passed directly to the 'typescript-eslint' parser
            parserOptions: {
                // Specifies using TypeScript APIs to generate type information for rules
                projectService: true,
            },
            // Specifies extra objects to add in the global scope during linting
            globals: __assign(__assign({}, globals_1.default.browser), globals_1.default.node),
        },
        // TS specific rules
        rules: {
            // Variable and parameter linting
            '@typescript-eslint/no-unused-vars': 'off',
            'no-empty-pattern': 'error',
        },
    },
], false));
