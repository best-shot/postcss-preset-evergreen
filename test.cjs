const test = require('ava').default;
const postcss = require('postcss');
const { format } = require('prettier');

const presets = require('./index.cjs');

function pretty(string) {
  return format(string, { parser: 'css', singleQuote: true });
}

function runner(t) {
  return async (input, output) => {
    const result = await postcss([presets]).process(input, { from: './' });

    t.is(pretty(result.css), pretty(output));

    t.is(result.warnings().length, 0);
  };
}

function css([string]) {
  return string;
}

test('stage 3', async (t) => {
  await runner(t)(
    css`
      @media screen and (width >= 500px) and (width <= 1200px) {
        body {
          font-kerning: normal;
          /* */
          gap: 20px;
          /* */
          break-inside: avoid;
          break-after: page;
        }
      }
    `,
    css`
      @media screen and (min-width: 500px) and (max-width: 1200px) {
        body {
          font-feature-settings: 'kern';
          -webkit-font-kerning: normal;
          font-kerning: normal;
          /* */
          gap: 20px;
          /* */
          page-break-inside: avoid;
          -moz-column-break-inside: avoid;
          break-inside: avoid;
          page-break-after: always;
          -moz-column-break-after: page;
          break-after: page;
        }
      }
    `,
  );
});

test('stage 2', async (t) => {
  await runner(t)(
    css`
      p:not(:first-child, .special) {
        overflow: hidden auto;
        /* */
        overflow-wrap: break-word;
        /* */
        place-self: center;
      }
    `,
    css`
      p:not(:first-child):not(.special) {
        overflow: hidden auto;
        /* */
        word-wrap: break-word;
        /* */
        place-self: center;
      }
    `,
  );
});

test('stage 1', async (t) => {
  await runner(t)(
    css`
      body {
        color: rgb(178 34 34);
        /* */
        width: clamp(10px, 4em, 80px);
      }
    `,
    css`
      body {
        color: rgb(178 34 34);
        /* */
        width: max(10px, min(4em, 80px));
      }
    `,
  );
});

test('other', async (t) => {
  await runner(t)(
    css`
      body {
        will-change: transform;
        /* */
        flex: 1;
      }
    `,
    css`
      body {
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        will-change: transform;
        /* */
        flex: 1 1;
      }
    `,
  );
});
