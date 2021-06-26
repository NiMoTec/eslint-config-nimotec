module.exports = {
  rules: {
    'no-console': ['warn', { allow: ['info', 'error'] }],
    quotes: ['error', 'single'],

    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
    'no-extra-boolean-cast': 'off',

    'import/prefer-default-export': 'off',
    'import/order': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-cycle': 'off',

    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/array-type': ['error', { default: 'array-simple', readonly: 'array-simple' }],
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: 'ctx|args|req|res|next|^_',
      },
    ],

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
};
