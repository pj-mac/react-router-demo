module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "plugin:react/recommended"
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [
        "react"
    ],
    rules: {
        indent: [
            "warn",
            4,
            { SwitchCase: 1 }
        ],
        "object-curly-spacing": ["error", "always"],
        quotes: ["error", "double"]
    },
};
