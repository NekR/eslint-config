module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "google"
  ],
  "plugins": [
    "react",
    "react-hooks"
  ],
  "rules": {
    "require-jsdoc": "off",
    "comma-dangle": ["warn", "always-multiline"],
    "no-undef": "error",
    "space-infix-ops": ["error", { "int32Hint": false }],
    "object-curly-spacing": ["error", "always"],
    "max-len": ["error", 180, 2, { "ignoreTemplateLiterals": true }],
    "curly": [2, "all"],
    "no-octal": "error",
    "no-eval": "error",
    "no-invalid-this": "off",
    "prefer-rest-params": "off",
    "prefer-spread": "off",
    "no-multi-spaces": ["error", { "ignoreEOLComments": true }],
    "react-hooks/rules-of-hooks": "error",
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "no-global-assign": "error",

    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "camelcase": ["error", { "properties": "never", "ignoreDestructuring": true }],
    "func-call-spacing": ["error", "never"],
    "no-array-constructor": "error",
    "no-unused-vars": ["error", { "ignoreRestSiblings": true, "args": "none" }],
    "semi": ["error", "always"],

    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/react-in-jsx-scope": 2,
    "react/prop-types": 2,
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2]
  },
  "settings": {
    "react": {
      "version": "detect"  // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
}
