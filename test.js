const test = require('ava').default;
const outdent = require('outdent');
const postcss = require('postcss');

const presets = require('.');

function runner(t) {
  return (input, output) => {
    const result = postcss().use(presets).process(input);

    t.is(outdent.string(result.css), outdent.string(output));

    t.is(result.warnings().length, 0);
  };
}

test('api', (t) => {
  runner(t)(
    `
    @media screen and (width >= 500px) and (width <= 1200px) {
      p:not(:first-child, .special) {
        will-change: transform;
      }
    }
    `,
    `
    @media screen and (min-width: 500px) and (max-width: 1200px) {
      p:not(:first-child):not(.special) {
        -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
        will-change: transform;
      }
    }
    `,
  );
});
