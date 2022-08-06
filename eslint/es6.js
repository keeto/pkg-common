module.exports = {
  extends: [
    './rules/es5.js',
    './rules/es6.js',
    './rules/style.js',
    require.resolve('eslint-config-prettier'),
    './overrides/base.js',
  ],
};
