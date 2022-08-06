# pkg-common

Configs and utilities for building packages.

## ESLint and Prettier

There are separate ESLint configs for TypeScript and ES6 packages:

```js
// .eslintrc.js for TypeScript
module.exports = {
  extends: require.resolve('@keeto/pkg-common/eslint')
};

// .eslintrc.js for ES6
module.exports = {
  extends: require.resolve('@keeto/pkg-common/eslint/es6')
};
```

There is one Prettier config file:

```js
// .prettierrc.js
module.exports = require('@keeto/pkg-common/prettier');
```

## TypeScript Configs

There are two TypeScript configs, one for building sources and one for tests.

```js
// Example .tsconfig.json for src
{
  "extends": "@keeto/pkg-common/tsconfig/src",
  "include": ["src/**/*"],
  "outDir": "./lib"
}

// Example .tsconfig.json for tests
{
  "extends": "@keeto/pkg-common/tsconfig/test",
  "include": ["**/*"]
}
```

Note that the `test` config has `noEmit` set to `true` by default.

## Build Scripts

TBD
