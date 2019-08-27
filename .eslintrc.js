module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
      'prettier/prettier': 'error',
      'no-console': ['error', { allow: ['tron']}],
      'react/state-in-constructor': 'off',
      'no-param-reassign': 'off',
      'react/jsx-filename-extension': [
          'warn',
          {
              extensions: ['.jsx', '.js']
          }
      ],
      'import/prefer-default-export': 'off'
  },
};
