module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        "mongo":true,
        "mocha":true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "mocha"
    ],
    "rules": {
        "linebreak-style": [
            "warn",
            "unix",
        ],
        "mocha/no-exclusive-tests":"error",
        "quotes": [
            "warn",
            "single"
        ],
        "no-unused-vars":["warn",{ "args": "after-used" }],
        "no-console":0
    }
};