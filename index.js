const postcss = require('postcss');

const { name } = require('./package.json');

const plugin = postcss.plugin(name, () => {
  const processor = postcss()
    /* eslint-disable global-require */

    // postcss-css-variables,
    .use(require('postcss-selector-not'))
    .use(require('postcss-will-change'))
    .use(require('postcss-media-minmax'))
    .use(require('autoprefixer'));

  return processor;
});

module.exports = plugin;
