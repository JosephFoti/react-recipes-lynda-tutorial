## Webpack

  - A module that bundles all of the many files created in a project into simple bundles for production. Can be configured to take most any kind of file and can be coupled with babel to run a pre-bundle compile. Can be auto configured to run in a development server and automatically bundle work as you write.

 - Loaders -> applied transformations during bundling
 - Plugins -> applied transformations to output

#### Config

  - webpack.config.js -> runs as a node file, requires an 'entry point', a root from which it will begin to track dependencies and compile all results, and a place to write the finished 'bundle.js' to.

  ```javascript

  const path = require('path');
  const webpack = require('webpack');
  const HtmlWebpackPlugin = require('html-webpack-plugin');

  require('dotenv').config();

  module.exports = {
    entry: ['whatwg-fetch', './index.js'],
    mode: 'development',
    context: path.join(__dirname, 'src'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: './bundle.js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css/,
          loader: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'file-loader',
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        inject: 'body',
      }),
      new webpack.DefinePlugin({
        API_URL: JSON.stringify(process.env.API_URL),
      }),
    ],
  };

  ```

  - Path
    - node module for manipulation of paths, used here to generate the absolue root directory of dinstict folders with path.join(`__dirname`)

  - HtmlWebpackPlugin
    - allows us to bundle html files

  - dotenv
    - lets us access our hiden environment data and preserves it's anonymity in the bundle

  - entry
    - defines 'entry' for webpack, where it starts bundling.

  - mode
    - defines environment for bundling

  - context
    - defines the scope of where the bundling should take place

  - output
    - defines parameters of bundle export

  - rules
    - Lets webpack know how to handle different filetypes before bundle

  - devServer
    - configures options for development server

  - plugins
    - configure how webpack treats additional content types like .env vars and html

#### Dependencies

  ```JSON
{
  "webpack": "^4.16.1",
  "webpack-cli": "^3.0.8",
  "webpack-dev-server": "^3.1.4",
}

```

#### Additional Plugins

```json

{
  "whatwg-fetch": "^2.0.4",
  "file-loader": "^1.1.11",
  "babel-loader": "^7.1.5",
  "css-loader": "^1.0.0",
  "postcss-loader": "^2.1.6",
  "style-loader": "^0.21.0",
}

  ```
