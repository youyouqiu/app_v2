module.exports = {
    root: true,
    extends: [
        '@react-native-community',
        'plugin:@typescript-eslint/recommended'
    ],
    globals: {
        "fetch": false,
        "Headers": false,
        "storage": false,
        "store": false,
        "FormData": false
    },
    plugins: [
        "react-hooks",
        "@typescript-eslint"
    ],
    env:{                         
        node: true,
    },
    rules: {
        'no-var': 'error',
        "semi": 0,
        "dot-notation": 0,
        "prettier/prettier": 0,
        "indent": ["error", 2],
        "no-tabs":"off",
        "no-undef": 2,
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/camelcase": 0,
        "@typescript-eslint/no-empty-interface": 0,
        "@typescript-eslint/member-delimiter-style": [
            2,
            {
                multiline: {
                    delimiter: 'none', // 'none' or 'semi' or 'comma'
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'semi', // 'semi' or 'comma'
                    requireLast: false,
                },
            },
        ],
        "@typescript-eslint/ban-ts-ignore": 1,
        "@typescript-eslint/no-use-before-define": 0,
        "no-unused-vars": 'error',
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "no-console": ["warn", { "allow": ["error"]}],
        "max-len": ["error", { "code": 200 }]
    }
};
  