# postcss-preset-evergreen

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

- autoprefixer
- postcss-clamp
- postcss-color-functional-notation
- postcss-flexbugs-fixes
- postcss-font-variant
- postcss-gap-properties
- postcss-media-minmax
- postcss-overflow-shorthand
- postcss-page-break
- postcss-place
- postcss-replace-overflow-wrap
- postcss-selector-not
- postcss-will-change

## Installation

```bash
npm install postcss-preset-evergreen --save-dev
```

## Usage

```json
// example: postcss.config.json
{
  "plugins": ["postcss-preset-evergreen"]
}
```
