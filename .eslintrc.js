/**
 * Tan Nguyen
 * Dec 25, 2019
 */
module.exports = {
  "parser": "babel-eslint",
  "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "node": true,
      "jest": true,
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "rules": {
      "indent": [
          "error",
          "tab"
      ],
      "react/prop-types": "off", // Remove warning proptypes
      "linebreak-style": [
          "error",
          "unix"
      ],
      'no-use-before-define': 'off', // No need to define any props to use it
      'react/jsx-filename-extension': 'off', // Allow for using ts or something like this
      "quotes": [ // Add/allow single-double
          "error",
          "single" 
      ],
      "semi": [
          "error",
          "always"
      ],
      "no-debugger": "off",
      // "import/prefer-default-export": false, // Remove warning import/export, but it will not auto fix for us
      "object-curly-spacing": ["error", "never"], // For spacing
      "no-mixed-spaces-and-tabs": 0, // Allow mixed space and tab with 0 indent
      "react/jsx-uses-vars": 2,
      "object-curly-newline": ["error", { // This rule enforces consistent line breaks inside braces of object literals or destructuring assignments.
          //"ObjectExpression": "always",
          "ObjectPattern": { "multiline": false },
          "ImportDeclaration": "never",
          "ExportDeclaration": { "multiline": false, "minProperties": 3 }
      }]
      // {
      //   "no-empty": [2, { "methods": true } ]
      // },
      // "no-empty": [ { // Allow empty try catch
      //   "allowEmptyCatch": true //(I think no need to catch error)
      // }]
  }
};