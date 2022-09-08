import type * as eslint from "eslint";

/*
 * Modified version of https://github.com/vercel/next.js/blob/v12.2.4/packages/eslint-config-next/index.js
 */
const config: eslint.Linter.Config = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
    },
    rules: {
        "import/no-anonymous-default-export": "warn",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "jsx-a11y/alt-text": [
            "warn",
            {
                elements: ["img"],
            },
        ],
        "jsx-a11y/aria-props": "warn",
        "jsx-a11y/aria-proptypes": "warn",
        "jsx-a11y/aria-unsupported-elements": "warn",
        "jsx-a11y/role-has-required-aria-props": "warn",
        "jsx-a11y/role-supports-aria-props": "warn",
        // don't allow unused variables unless they begin with an underscore
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                vars: "all",
                args: "after-used",
                ignoreRestSiblings: false,
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
            },
        ],
        // this doesn't play nicely with react onClick function calls
        "@typescript-eslint/no-misused-promises": ["off"],
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/array-type": [
            "error",
            {
                default: "array",
                readonly: "array",
            },
        ],
        "no-return-await": "off",
        "@typescript-eslint/return-await": ["error", "never"],
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/restrict-plus-operands": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "no-unused-vars": "off",
        camelcase: "off",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-require-imports": 2,
        "@typescript-eslint/prefer-for-of": 2,
        "no-loop-func": "off",
        "@typescript-eslint/no-loop-func": ["error"],
        complexity: "off",
        "standard/no-callback-literal": 0,
        radix: ["error", "always"],
        "no-cond-assign": ["error", "always"],
        eqeqeq: ["error", "always"],
        "no-throw-literal": "off",
        "@typescript-eslint/no-throw-literal": ["error"],
    },
    extends: [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],
    plugins: ["import", "react", "jsx-a11y", "@typescript-eslint", "only-warn"],
    settings: {
        react: {
            version: "detect",
        },
        "import/parsers": {
            [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
        },
        "import/resolver": {
            [require.resolve("eslint-import-resolver-node")]: {
                extensions: [".ts", ".tsx"],
            },
            [require.resolve("eslint-import-resolver-typescript")]: {
                alwaysTryTypes: true,
            },
        },
    },
    env: {
        browser: true,
    },
};

export = config;
