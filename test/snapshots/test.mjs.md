# Snapshot report for `test/test.mjs`

The actual snapshot is saved in `test.mjs.snap`.

Generated by [AVA](https://avajs.dev).

## stage 3

> Snapshot 1

    `input:hover,␊
    input:focus,␊
    button:hover,␊
    button:focus {␊
      order: 1;␊
    }␊
    div {␊
      display: grid;␊
      grid-gap: 20px;␊
      gap: 20px;␊
    }␊
    @media screen and (min-width: 500px) and (max-width: 1200px) {␊
      body {␊
        /* */␊
        gap: 20px;␊
        -moz-column-gap: 40px;␊
        column-gap: 40px;␊
        row-gap: 20px;␊
        page-break-after: always;␊
        break-after: page;␊
        /* */␊
        page-break-inside: avoid;␊
        break-inside: avoid;␊
        font-feature-settings: "kern";␊
        -webkit-font-kerning: normal;␊
        font-kerning: normal;␊
      }␊
    }␊
    `

## stage 2

> Snapshot 1

    `p:not(:first-child):not(.special) {␊
      /* */␊
      align-self: center;␊
      justify-self: center;␊
      place-self: center;␊
      opacity: 0.45;␊
      outline-color: rgba(0, 196, 255, 0.5);␊
      border-color: rgba(51, 170, 51, 0.4);␊
      background-color: rgb(131, 27, 0);␊
      overflow-x: hidden;␊
      overflow-y: auto;␊
      overflow: hidden auto;␊
      color: rgba(17, 0, 0, 0.2);␊
      caret-color: rgb(73, 71, 69);␊
      /* */␊
      word-wrap: break-word;␊
    }␊
    `

## stage 1

> Snapshot 1

    `body {␊
      /* */␊
      width: max(10px, min(4em, 80px));␊
      color: rgb(178, 34, 34);␊
    }␊
    `

## other

> Snapshot 1

    `body {␊
      /* */␊
      flex: 1 1;␊
      -webkit-backface-visibility: hidden;␊
      backface-visibility: hidden;␊
      will-change: transform;␊
      top: 0;␊
      right: 0;␊
      bottom: 0;␊
      left: 0;␊
      padding-top: calc(0px + 5em);␊
      padding-top: calc(constant(safe-area-inset-top, 0px) + 5em);␊
      padding-top: calc(env(safe-area-inset-top, 0px) + 5em);␊
    }␊
    `

## nesting

> Snapshot 1

    `.foo {␊
      color: red;␊
    }␊
    .foo:hover {␊
      color: green;␊
    }␊
    .foo > .bar {␊
      color: blue;␊
    }␊
    @media (prefers-color-scheme: dark) {␊
      .foo {␊
        color: cyan;␊
      }␊
    }␊
    .foo {␊
      color: pink;␊
    }␊
    `
