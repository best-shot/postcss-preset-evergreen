const test = require('ava').default;
const postcss = require('postcss');
const { format } = require('prettier');

const presets = require('.');

function pretty(string) {
  return format(string, { parser: 'css' });
}

function runner(t) {
  return (input, output) => {
    const result = postcss().use(presets).process(input);

    t.is(pretty(result.css), pretty(output));

    t.is(result.warnings().length, 0);
  };
}

function css([string]) {
  return string;
}

test('stage 3', (t) => {
  runner(t)(
    css`
      body {
        font-variant: small-caps;
        /* */
        break-inside: avoid;
        break-after: page;
      }

      @media screen and (width >= 500px) and (width <= 1200px) {
        gap: 20px;
      }
    `,
    css`
      body {
        font-feature-settings: 'smcp';
        font-variant: small-caps;
        /* */
        page-break-inside: avoid;
        -moz-column-break-inside: avoid;
        break-inside: avoid;
        page-break-after: always;
        -moz-column-break-after: page;
        break-after: page;
      }

      @media screen and (min-width: 500px) and (max-width: 1200px) {
        grid-gap: 20px;
        gap: 20px;
      }
    `,
  );
});

test('stage 2', (t) => {
  runner(t)(
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
        overflow-x: hidden;
        overflow-y: auto;
        overflow: hidden auto;
        /* */
        word-wrap: break-word;
        /* */
        align-self: center;
        justify-self: center;
        place-self: center;
      }
    `,
  );
});

test('stage 1', (t) => {
  runner(t)(
    css`
      body {
        color: rgb(178 34 34);
        /* */
        width: clamp(10px, 4em, 80px);
      }
    `,
    css`
      body {
        color: rgb(178, 34, 34);
        /* */
        width: max(10px, min(4em, 80px));
      }
    `,
  );
});

test('other', (t) => {
  runner(t)(
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
