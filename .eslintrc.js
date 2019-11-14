module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'airbnb-angular'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-html', 'html'],
  rules: {
    'global-require': 0,
    'linebreak-style': 0,
    'no-plusplus': 0,
    'object-curly-newline': [
      'error',
      {
        ImportDeclaration: { minProperties: 7, consistent: false, multiline: true },
      },
    ],
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
