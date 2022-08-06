module.exports = {
  extends: [
    './rules/es5.js',
    './rules/es6.js',
    './rules/typescript.js',
    './rules/style.js',
    require.resolve('eslint-config-prettier'),
    './overrides/base.js',
  ],

  // Parser options are used mainly for TypeScript
  parserOptions: {
    sourceType: 'module',
    project: 'tsconfig.json',
  },
};
