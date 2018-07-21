## Pretter

  - Pretter is a style package that keeps code in a consistent style within a project so that teams can more easily adhere to similar coding styles. It transpiles you code into a better format and can be configured with a git hook to run automatically on each commit

#### Config notes

  - Pretter config file -> .prettierrc, format JSON.

  - Can include custom rules for transpiling

  ```json

  {
    "singleQuote": true,
    "trailingComma": "all"
  }

  ```

    - can be added to .eslintrc.json as a style add-on and configured in package.json scripts to run as a pre-commit configuration coupled with eslint through husky and lint-staged...

    ```json
    ...
  "scripts": {
    "precommit": "lint-staged"
  },
  "lint-staged": {
    "*.js": [
      "yarn lint",
      "prettier --write",
      "git add"
    ]
  },

    ```

    - if the lint fails prettier does not write

#### Dependencies

```JSON

"eslint-config-prettier": "^2.9.0",
"prettier": "^1.13.7",

```
