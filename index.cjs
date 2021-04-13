const postcss = require('postcss');
const { name } = require('./package.json');

module.exports = () => ({
  ...postcss([
    // postcss-css-variables
    // postcss-custom-properties
    // postcss-is-pseudo-class
    // postcss-nesting
    // require('postcss-color-functional-notation'),
    // require('postcss-gap-properties'),
    // require('postcss-overflow-shorthand'),
    // require('postcss-place'),
    require('postcss-clamp'),
    require('postcss-font-variant'),
    require('postcss-media-minmax'),
    require('postcss-page-break'),
    require('postcss-replace-overflow-wrap'),
    require('postcss-selector-not').default,
    require('postcss-will-change'),
    require('postcss-flexbugs-fixes'),
    require('autoprefixer'),
  ]),
  postcssPlugin: name,
});

module.exports.postcss = true;
