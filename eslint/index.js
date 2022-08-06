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

  overrides: [
    // Overrides for test files
    {
      files: ['test/**/*.ts', 'test/**/*.js', 'test/**/*.tsx', 'test/**/*.jsx'],
      env: {
        mocha: true,
      },
      rules: {
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': [
          'error',
          {
            allowKeywords: true,
            allowPrivateClassPropertyAccess: true,
          },
        ],
      },
    },
  ],
};
