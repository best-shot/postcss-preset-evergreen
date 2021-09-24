'use strict';

const postcss = require('postcss');
const { name } = require('./package.json');

module.exports = () => ({
  ...postcss([
    require('postcss-clamp'),
    require('postcss-color-functional-notation'),
    require('postcss-flexbugs-fixes'),
    require('postcss-font-variant'),
    require('postcss-media-minmax'),
    require('postcss-overflow-shorthand'),
    require('postcss-page-break'),
    require('postcss-place'),
    require('postcss-replace-overflow-wrap'),
    require('postcss-selector-not').default,
    require('postcss-will-change'),
    require('autoprefixer'),
  ]),
  postcssPlugin: name,
});

module.exports.postcss = true;
