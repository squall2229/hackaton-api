module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
        "airbnb-base",
        "prettier"
    ],
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
      "consistent-return": "off",
      "class-methods-use-this": "off",
      "no-underscore-dangle": "off"
    }
};
