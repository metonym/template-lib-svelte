# template-lib-svelte

[![Build Status](https://travis-ci.com/metonym/template-lib-svelte.svg?branch=master)](https://travis-ci.com/metonym/template-lib-svelte)
[![codecov](https://img.shields.io/codecov/c/github/metonym/template-lib-svelte.svg)](https://codecov.io/gh/metonym/template-lib-svelte)

> Template for building Svelte component libraries.

## Workflow

- **Development**: develop the library using a webpack set-up ([`app/`](app/))
- **Testing**: unit test the library using [Jest](https://github.com/facebook/jest) and [@testing-library/svelte](https://github.com/testing-library/svelte-testing-library)
- **Building**: build the library using [Rollup](https://github.com/rollup/rollup) to support ES/UMD formats
- **Publishing**: publish the library to [NPM](https://www.npmjs.com/)
- **Documentation**: deploy the compiled webpack set-up to [GitHub Pages](https://pages.github.com/)

## Getting Started

Clone the repository:

```bash
git clone git@github.com:metonym/template-lib-svelte.git
cd template-lib-svelte
```

Install its dependencies:

```bash
yarn install
```

## Development

When developing, use the webpack app set-up in the `app/` folder to reload any changes to the library.

```bash
cd app
yarn install
yarn start
```

## Available Scripts

### `yarn build`

Builds the library for production using [Rollup](https://github.com/rollup/rollup) and outputs artifacts to the `lib` folder.

#### Build Formats

```js
// package.json
{
  "svelte": "src/index.js", // preferred Svelte entry
  "main": "lib/index.js", // UMD build
  "module": "lib/index.mjs" // ES Module build
}
```

### `yarn test`

Runs tests using [Jest](https://github.com/facebook/jest) with [@testing-library/svelte](https://github.com/testing-library/svelte-testing-library) and generates a coverage report.

### `yarn test:tdd`

Runs tests in watch mode.

## Publishing to `npm`

### 1) Update the Library Name

Update the library name in [package.json](package.json) and [rollup.config.js](rollup.config.js).

```diff
{
- "name": "template-lib-svelte",
+ "name": "<YOUR_LIBRARY_NAME>"
}
```

```diff
// rollup.config.js
if (UMD) {
- output.name = 'template-lib-svelte';
+ output.name = '<YOUR_LIBRARY_NAME>';
}
```

## License

[MIT](LICENSE)
