module.exports = {
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'camelcase': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'variableLike',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'memberLike',
        modifiers: ['private', 'protected'],
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'require',
      },
      {
        selector: 'memberLike',
        modifiers: ['public', 'static', 'readonly'],
        format: null,
        leadingUnderscore: 'forbid',
      },
      {
        selector: 'method',
        modifiers: ['private', 'protected'],
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'method',
        modifiers: ['public', 'static'],
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
      },
      {selector: 'enumMember', format: ['UPPER_CASE']},
    ],

    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2, {SwitchCase: 1}],

    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',

    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error'],

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 0,

    'no-unused-expression': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    '@typescript-eslint/array-type': ['error', {default: 'array'}],

    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never',
      },
    ],

    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],

    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: true,
        },
      },
    ],

    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'private-static-field',
          'protected-static-field',
          'public-static-field',
          'private-instance-field',
          'protected-instance-field',
          'public-instance-field',
          'private-constructor',
          'protected-constructor',
          'public-constructor',
          'private-static-method',
          'protected-static-method',
          'public-static-method',
          'private-instance-method',
          'protected-instance-method',
          'public-instance-method',
        ],
      },
    ],

    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: true,
        ignoreProperties: true,
      },
    ],

    '@typescript-eslint/no-misused-new': 'error',

    '@typescript-eslint/no-parameter-properties': ['error'],

    '@typescript-eslint/no-use-before-define': ['error'],

    '@typescript-eslint/no-useless-constructor': ['error'],

    '@typescript-eslint/type-annotation-spacing': [
      'error',
      {
        before: false,
        after: true,
        overrides: {arrow: {before: true, after: true}},
      },
    ],

    '@typescript-eslint/unified-signatures': ['error'],

    '@typescript-eslint/no-for-in-array': ['error'],

    '@typescript-eslint/no-unnecessary-qualifier': ['error'],

    '@typescript-eslint/no-unnecessary-type-assertion': ['error'],

    '@typescript-eslint/restrict-plus-operands': ['error'],
  },
};
