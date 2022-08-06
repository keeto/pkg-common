module.exports = {
  plugins: ['jsdoc', 'eslint-plugin-import-helpers', 'eslint-plugin-prettier'],
  rules: {
    'prettier/prettier': 'error',

    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: [
          'module',
          '/(/src|\\.|\\.\\.)/typedefs/',
          '/(/src|\\.|\\.\\.)/enums/',
          '/(/src|\\.|\\.\\.)/error/',
        ],
      },
    ],

    'jsdoc/newline-after-description': ['error', 'always'],
    'jsdoc/no-types': 'error',
    'jsdoc/require-hyphen-before-param-description': 'error',
    'jsdoc/require-param': 'error',
    'jsdoc/require-param-description': 'error',
    'jsdoc/require-param-name': 'error',
    'jsdoc/require-returns': 'error',
    'jsdoc/require-returns-description': 'error',
  },

  settings: {
    jsdoc: {
      tagNamePreference: {
        arg: 'param',
        argument: 'param',
        constant: 'const',
      },
    },
  },
};
