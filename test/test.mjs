import test from 'ava';
import postcss from 'postcss';

import presets from '../index.cjs';

async function runner(t, input) {
  const result = await postcss([presets]).process(input, { from: './' });

  t.is(result.warnings().length, 0);

  t.snapshot(result.css);
}

function css([string]) {
  return string;
}

test(
  'stage 3',
  runner,
  css`
    div {
      display: grid;
      gap: 20px;
    }
    @media screen and (width >= 500px) and (width <= 1200px) {
      body {
        font-kerning: normal;
        /* */
        gap: 20px;
        column-gap: 40px;
        row-gap: 20px;
        /* */
        break-inside: avoid;
        break-after: page;
      }
    }
  `,
);

test(
  'stage 2',
  runner,
  css`
    p:not(:first-child, .special) {
      overflow: hidden auto;
      /* */
      overflow-wrap: break-word;
      /* */
      place-self: center;
      /* */
      color: #1003;
      border-color: rgba(51 170 51 / 0.4);
      outline-color: hwb(194 0% 0% / 0.5);
      opacity: 45%;
    }
  `,
);

test(
  'stage 1',
  runner,
  css`
    body {
      color: rgb(178 34 34);
      /* */
      width: clamp(10px, 4em, 80px);
    }
  `,
);

test(
  'other',
  runner,
  css`
    body {
      will-change: transform;
      /* */
      flex: 1;
      inset: 0;
    }
  `,
);
