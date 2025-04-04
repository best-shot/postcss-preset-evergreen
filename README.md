# postcss-preset-evergreen <img src="https://postcss.org/assets/postcss-CsElRNOW.svg" alt="logo" height="80" align="right">

A [postcss] preset for modern css syntaxes.

[![npm][npm-badge]][npm-url]
[![github][github-badge]][github-url]
![node][node-badge]

[postcss]: https://postcss.org/
[npm-url]: https://www.npmjs.com/package/postcss-preset-evergreen
[npm-badge]: https://img.shields.io/npm/v/postcss-preset-evergreen.svg?style=flat-square&logo=npm
[github-url]: https://github.com/best-shot/postcss-preset-evergreen
[github-badge]: https://img.shields.io/npm/l/postcss-preset-evergreen.svg?style=flat-square&colorB=blue&logo=github
[node-badge]: https://img.shields.io/node/v/postcss-preset-evergreen.svg?style=flat-square&colorB=green&logo=node.js

This preset includes the following packages:

- @csstools/postcss-hwb-function
- @csstools/postcss-is-pseudo-class
- autoprefixer
- postcss-clamp
- postcss-color-functional-notation
- postcss-color-hex-alpha
- postcss-flexbugs-fixes
- postcss-font-variant
- postcss-gap-properties
- postcss-logical
- postcss-media-minmax
- postcss-opacity-percentage
- postcss-overflow-shorthand
- postcss-page-break
- postcss-place
- postcss-replace-overflow-wrap
- postcss-selector-not
- postcss-will-change
- postcss-nesting

## Installation

```bash
npm install postcss-preset-evergreen postcss --save-dev
```

## Usage

```jsonc
// example: postcss.config.json
{
  "plugins": ["postcss-preset-evergreen"]
}
```
