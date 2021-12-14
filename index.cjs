'use strict';

const { name } = require('./package.json');

module.exports = {
  plugins: [
    require('postcss-clamp')(),
    require('postcss-color-functional-notation')(),
    require('postcss-color-hex-alpha')(),
    require('postcss-flexbugs-fixes')(),
    require('postcss-font-variant')(),
    require('postcss-gap-properties')(),
    require('postcss-media-minmax')(),
    require('postcss-opacity-percentage')(),
    require('postcss-overflow-shorthand')(),
    require('postcss-page-break')(),
    require('postcss-place')(),
    require('postcss-replace-overflow-wrap')(),
    require('postcss-selector-not').default(),
    require('postcss-will-change')(),
    require('autoprefixer')(),
  ],
  postcssPlugin: name,
};
