## Babel

javascript transpiling agent which converts es^ to a previous version of javascript for cross browser compatability.

#### Config

.babelrc -> object that takes array of preset plugins

```json
{
  "presets": [
    "es2015","react","stage-0"
  ]
}

```

can be configured with webpack to run pre-bundle...

```javascript

module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }
  ]
}

```

and thusly added to the devServer's build/start script.

#### Usage

```bash

$ ./node_modules/.bin/babel index.js -o ./bundle.js --presets=es2015

```

- [bable path (local)] [target] [write new file] [file name] [preset config (needs independent instalation)]
