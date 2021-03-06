module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "require": "writable",
        "process": "writable",
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "plugins": [
        "vue"
    ],
    "rules": {
    }
};