const postCssNext = require('postcss-cssnext');
const postcssImport = require('postcss-import');

module.exports = {
  plugins: [
    postcssImport,
    postCssNext,
  ],
};
