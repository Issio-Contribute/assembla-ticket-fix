/*! Copyright (c) 2024 Issio Solutions, Inc */

import js from "@eslint/js";
import { /* fixupPluginRules, fixupRule, fixupConfigRules /* */ } from "@eslint/compat";
import compat from "eslint-plugin-compat";
import globals from "globals";
import jsdoc from "eslint-plugin-jsdoc";
import newWithError from "eslint-plugin-new-with-error";
import noUseExtendNative from "eslint-plugin-no-use-extend-native";
import noUnsanitized from "eslint-plugin-no-unsanitized";
import stylistic from "@stylistic/eslint-plugin";

export default [
	{
		ignores: [
			"node/**",
			"node_modules/**"
		]
	},
	jsdoc.configs['flat/recommended'],
	noUseExtendNative.configs.recommended,
	js.configs.recommended,
	compat.configs["flat/recommended"],
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "script",
			globals: {
				...globals.browser,
				...globals.es2022
			}
        },
		plugins: {
			jsdoc,
			"new-with-error": newWithError,
			"no-unsanitized": noUnsanitized,
			stylistic
		},
		rules: {
			"no-irregular-whitespace": "off",
			"compat/compat": 2,
			"jsdoc/check-alignment": 2,
			"jsdoc/check-indentation": 0,
			"jsdoc/check-line-alignment": 0,
			"jsdoc/check-param-names": 2,
			"jsdoc/check-tag-names": [
				2,
				{
					definedTags: [
						"return",
						"returns",
						"subpackage",
						"note"
					]
				}
			],
			"jsdoc/check-types": [
				1,
				{
					noDefaults: true
				}
			],
			"jsdoc/empty-tags": "off",
			"jsdoc/lines-before-block": "off",
			"jsdoc/multiline-blocks": "off",
			"jsdoc/no-defaults": "off",
			"jsdoc/no-multi-asterisks": "off",
			"jsdoc/no-undefined-types": "off",
			"jsdoc/require-asterisk-prefix": 1,
			"jsdoc/require-jsdoc": "off",
			"jsdoc/require-hyphen-before-param-description": 1,
			"jsdoc/require-param": 2,
			"jsdoc/require-param-name": 2,
			"jsdoc/require-param-description": "off",
			"jsdoc/require-param-type": 2,
			"jsdoc/require-property-description": "off",
			"jsdoc/require-returns": 2,
			"jsdoc/require-returns-check": 2,
			"jsdoc/require-returns-description": "off",
			"jsdoc/require-returns-type": 2,
			"jsdoc/tag-lines": "off",
			"jsdoc/valid-types": "off",

			"no-unsanitized/method": "error",
			"no-unsanitized/property": "error",

			"stylistic/arrow-parens": [
				"error",
				"always"
			],
			"stylistic/arrow-spacing": "warn",
			"stylistic/comma-dangle": [
				"warn",
				{
					arrays:  "only-multiline",
					objects: "only-multiline",
					imports: "only-multiline",
					exports: "only-multiline"
				}
			],
			"stylistic/func-call-spacing": "warn",
			"stylistic/key-spacing": [
				"off",
				{
					beforeColon: false,
					afterColon: true
				}
			],
			"stylistic/no-confusing-arrow": "error",
			"stylistic/no-extra-parens": [
				"warn",
				"functions"
			],
			"stylistic/no-extra-semi": "warn",
			"stylistic/no-floating-decimal": "warn",
			"stylistic/no-multi-spaces": "off",
			"stylistic/no-mixed-operators": "off",
			"stylistic/no-mixed-spaces-and-tabs": [
				"off",
				false
			],
			"stylistic/no-trailing-spaces": "off",
			"stylistic/no-whitespace-before-property": "error",
			"stylistic/quotes": [
				"off",
				"double"
			],
			"stylistic/rest-spread-spacing": "error",
			"require-atomic-updates": "warn",
			"stylistic/space-before-function-paren": [
				"warn",
				{
					anonymous: "never",
					named: "never",
					asyncArrow: "always"
				}
			],
			"stylistic/space-infix-ops": "off",
			"stylistic/semi": [
				"error",
				"always"
			],
			"stylistic/wrap-iife": [
				"error",
				"any"
			],
			"array-callback-return": [
				"error",
				{
					checkForEach: true,
					allowVoid: true
				}
			],
			"block-scoped-var": "off",
			camelcase: "off",
			complexity: "off",
			"consistent-return": [
				"error",
				{
					treatUndefinedAsUnspecified: true
				}
			],
			curly: "error",
			"default-param-last": "error",
			"dot-notation": "warn",
			eqeqeq: "error",
			"getter-return": "error",
			"grouped-accessor-pairs": "warn",
			"max-depth": "off",
			"new-cap": "off",
			"no-alert": "off",
			"no-array-constructor": "warn",
			"no-await-in-loop": "warn",
			"no-caller": "warn",
			"no-console": "off",
			"no-constant-condition": "warn",
			"no-constant-binary-expression": "warn",
			"no-dupe-else-if": "error",
			"no-empty-static-block": "off",
			"no-eval": "error",
			"no-empty": [
				1,
				{
					allowEmptyCatch: true
				}
			],
			"no-extend-native": "error",
			"no-extra-bind": "warn",
			"no-fallthrough": [
				"warn",
				{
					reportUnusedFallthroughComment: true
				}
			],
			"no-global-assign": "error",
			"no-implied-eval": "error",
			"no-inner-declarations": "warn",
			"no-iterator": "error",
			"no-label-var": "error",
			"no-labels": "warn",
			"no-lone-blocks": "warn",
			"no-lonely-if": "warn",
			"no-magic-numbers": [
				"off",
				{
					ignore: [
						-1,
						0,
						1,
						60,
						100,
						1000,
						1440,
						2400
					],
					ignoreArrayIndexes: true,
					ignoreDefaultValues: true,
					ignoreClassFieldInitialValues: true
				}
			],
			"no-nested-ternary": "warn",
			"no-new": "error",
			"no-new-func": "error",
			"no-new-native-nonconstructor": "error",
			"no-new-wrappers": "error",
			"no-object-constructor": "warn",
			"no-promise-executor-return": "error",
			"no-setter-return": "error",
			"no-underscore-dangle": "off",
			"no-redeclare": [
				"error",
				{
					builtinGlobals: false
				}
			],
			"no-restricted-syntax": [
				"error",
				{
					selector: "FunctionDeclaration[generator=true][async=true]",
					message: "Async Generators are not allowed (yet)."
				}
			],
			"no-return-assign": "error",
			"no-self-compare": "warn",
			"no-script-url": "error",
			"no-sequences": "warn",
			"no-template-curly-in-string": "warn",
			"no-undef": "warn",
			"no-unneeded-ternary": "warn",
			"no-unused-expressions": [
				"error",
				{
					allowShortCircuit: true,
					allowTernary: true
				}
			],
			"no-unreachable-loop": "warn",
			"no-useless-assignment": "off",  /* Long-term => "warn" */
			"no-useless-computed-key": "warn",
			"no-useless-return": "warn",
			"no-unused-disable": "off",
			"no-unused-vars": [
				"error",
				{
					vars: "local",
					args: "after-used",
					caughtErrors: "none"
				}
			],
			"no-use-before-define": [
				"error",
				{
					functions: false,
					classes: true
				}
			],
			"prefer-const": "warn",
			"prefer-regex-literals": "warn",
			"radix": [
				"error",
				"always"
			],
			"strict": [
				"error",
				"function"
			],
			"use-isnan": [
				"error",
				{
					enforceForSwitchCase: true
				}
			],
			"vars-on-top": "warn"
		},
		settings: {
			jsdoc: {
				tagNamePreference: {
					return: "return"
				},
				preferredTypes: {
					Object: "object",
					object: "Object"
				},
				maxLines: 5
			}
		},
		linterOptions: {
            reportUnusedDisableDirectives: true
        }
    },
	{
		files: [
			"eslint.config.js"
		],
		languageOptions: {
			sourceType: 'module'
		}
	}
];
