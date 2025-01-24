import test from 'ava';
import postcss from 'postcss';
import { format } from 'prettier';

import presets from '../lib/index.cjs';

async function runner(t, input) {
  const result = await postcss([presets]).process(input, { from: './' });

  t.is(result.warnings().length, 0);

  t.snapshot(await format(result.css, { parser: 'css' }));
}

function css([string]) {
  return string;
}

test(
  'stage 3',
  runner,
  css`
    :is(input, button):is(:hover, :focus) {
      order: 1;
    }
    div {
      display: grid;
      gap: 20px;
    }
    @media screen and (width >= 500px) and (width <= 1200px) {
      body {
        /* */
        gap: 20px;
        column-gap: 40px;
        row-gap: 20px;
        break-after: page;
        /* */
        break-inside: avoid;
        font-kerning: normal;
      }
    }
  `,
);

test(
  'stage 2',
  runner,
  css`
    p:not(:first-child, .special) {
      /* */
      place-self: center;
      opacity: 45%;
      outline-color: hwb(194 0% 0% / 0.5);
      border-color: rgba(51 170 51 / 0.4);
      overflow: hidden auto;
      /* */
      color: #1003;
      /* */
      overflow-wrap: break-word;
    }
  `,
);

test(
  'stage 1',
  runner,
  css`
    body {
      /* */
      width: clamp(10px, 4em, 80px);
      color: rgb(178 34 34);
    }
  `,
);

test(
  'other',
  runner,
  css`
    body {
      /* */
      flex: 1;
      will-change: transform;
      inset: 0;
      padding-top: calc(env(safe-area-inset-top, 0px) + 5em);
    }
  `,
);

test(
  'nesting',
  runner,
  css`
    .foo {
      color: red;

      &:hover {
        color: green;
      }

      > .bar {
        color: blue;
      }

      @media (prefers-color-scheme: dark) {
        color: cyan;
      }

      color: pink;
    }
  `,
);
