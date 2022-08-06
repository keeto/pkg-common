module.exports = {
  ignorePatterns: [
    // Ignore everything in node_modules
    'node_modules/**',

    // Ignore main build target
    'lib/**',

    // Ignore hidden files and configs
    '.*/**/*.js',
    '.*.js',
  ],

  overrides: [
    // Forces eslint to read regular files with `eslint .`
    {
      files: ['src/**/*.ts', 'src/**/*.js', 'src/**/*.tsx', 'src/**/*.jsx'],
    },

    // Overrides for test files
    {
      files: ['test/**/*.ts', 'test/**/*.js', 'test/**/*.tsx', 'test/**/*.jsx'],
      env: {
        mocha: true,
      },
      rules: {
        'max-len': 0,
        'padded-blocks': 0,
        'no-console': 'warn',
      },
    },

    // Overrides for files in `bin`
    {
      files: ['bin/**/*.js'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
