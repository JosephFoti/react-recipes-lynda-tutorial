## esLint

  - A linting agent which provides error notifications upon seeing both fatal code errors and stylistic simplicity errors. EsLint strives to push you into writing consistent sytylized code with as little extra overhead as possible.

#### Config notes

  - eslintrc.json -> json config file which can be read by atom to adjust rules in in-editor interface...

  ```json

  {
    "parser": "babel-eslint",
      "extends": ["prettier","airbnb"],
      "plugins": [
        "jest"
      ],
      "env": {
        "es6": true,
        "browser": true,
        "jest/globals": true
      },
      "globals": {
        "API_URL": true
      },
      "rules": {
        "arrow-parens": 0,
        "react/jsx-one-expression-per-line": 0,
        "react/jsx-filename-extension": 0,
        "react/forbid-prop-types": 0,
        "react/require-default-props": 0,
        "react/destructuring-assignment": 0,
        "jsx-a11y/click-events-have-key-events":0 ,
        "jsx-a11y/no-noninteractive-element-interactions":0,
        "jsx-a11y/no-static-element-interactions":0,
        "comma-dangle":0,
        "object-curly-newline":0,
        "react/no-unused-state":0,
        "import/no-extraneous-dependencies":0
      }
  }

  ```

  - parser
    - lets eslint know what the gerneral stylistic structure to follow is

    - extends
      - downloadable style guides from other organizations, AirBnb one of the most common, set in array in order of priority

    - plugins
      - allows eslint to read custom modules without throwing strange errors

    - env
      - describes the environment for the eslint config.

    - globals
      - shows eslint global variables so it will not ring scope errors

    - rules
      - allows for the user to disable or enable specific rules if they do not wish to follow them

#### Useage

    - can be configured in editor or attached to a pre-commit git hook with husky and prettier in package.json or can be tied to its own lint script to run checks before commit

    ```json

    "scripts": {
      "lint": "./node_modules/.bin/eslint ./src",
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

#### Dependencies

  ```json

{
  "babel-eslint": "^8.2.6",
  "eslint": "^4.19.1",
  "eslint-config-airbnb": "^17.0.0",
  "eslint-config-prettier": "^2.9.0",
  "eslint-plugin-import": "^2.13.0",
  "eslint-plugin-jest": "^21.18.0",
  "eslint-plugin-jsx-a11y": "^6.1.1",
  "eslint-plugin-react": "^7.10.0",
}

  ```
