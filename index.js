const postcss = require('postcss');

const { name } = require('./package.json');

const plugin = postcss.plugin(name, () => {
  const processor = postcss()
    /* eslint-disable global-require */

    // postcss-css-variables
    // postcss-custom-properties
    // postcss-is-pseudo-class
    // postcss-nesting
    .use(require('postcss-clamp'))
    .use(require('postcss-color-functional-notation'))
    .use(require('postcss-font-variant'))
    .use(require('postcss-gap-properties'))
    .use(require('postcss-media-minmax'))
    .use(require('postcss-overflow-shorthand'))
    .use(require('postcss-page-break'))
    .use(require('postcss-place'))
    .use(require('postcss-replace-overflow-wrap'))
    .use(require('postcss-selector-not'))
    .use(require('postcss-will-change'))
    .use(require('postcss-flexbugs-fixes'))
    .use(require('autoprefixer'));

  return processor;
});

module.exports = plugin;
