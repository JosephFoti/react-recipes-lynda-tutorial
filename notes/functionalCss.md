## Functional CSS through postcss cssnext and basscss

  - Functional css is a mode of styling with the goal of writing as little custom css as possible. Functional css libraries come prebuilt with moduler classes which contain very specific rules. [BassCss](http://basscss.com/) is the collection used for this project. Postcss is a transpiling agent which allows us to write advanced css code by enuring that our code will always be compatable. Cssnext allows us to use global css variables to maintain consistancy throughout the application.

#### Config

  - postcss.config.js...

  ```js

  const postCssNext = require('postcss-cssnext');
  const postcssImport = require('postcss-import');

  module.exports = {
    plugins: [postcssImport, postCssNext],
  };


  ```

  - allows us to import style modules from one css file to another, linking directly to an index.css. Also allows us to use postcss

  - index.css...

  ```css

  @import 'basscss';
  @import 'basscss-colors';
  @import 'basscss-background-colors';
  @import './borders';
  @import './fonts';
  @import './shame';

  :root {
    --h1: 70px;
    --h2: 50px;
    --black: #222;
    --lime: #cdebbd;
  }

  * {
    margin: 0;
    color: var(--black);
    font-family: 'Open-Sans', sans-serif;
  }

  body {
    background-color: var(--lime);
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0.4em 0px;
    font-family: 'Oswald'
  }


  ```

  - imports basscss libraries and defines values of global variables built into basscss for customization.

  - also need to be configured in webpack for compilation...

  ```javascript

  module: {
    rules: [
      {
        test: /\.css/,
        loader: ['style-loader', 'css-loader', 'postcss-loader'],
      }
    ]
  }

  ```

#### Dependencies

  ```JSON
{
  "css-loader": "^1.0.0",
  "postcss-loader": "^2.1.6",
  "style-loader": "^0.21.0",
  "basscss": "^8.0.4",
  "basscss-background-colors": "^2.1.0",
  "basscss-colors": "^2.2.0",
  "postcss": "^7.0.0",
  "postcss-cssnext": "^3.1.0",
  "postcss-import": "^11.1.0",
}
  ```
