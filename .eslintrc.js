module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-angular',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'eslint-plugin-html', 'html'],
  rules: {
    'no-unused-vars': 2,
    'prettier/prettier': 'error',
    'global-require': 0,
    'linebreak-style': 0,
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'object-curly-newline': [
      'error',
      {
        ImportDeclaration: { minProperties: 7, consistent: false, multiline: true },
      },
    ],
    'lines-between-class-members': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
  },
};
