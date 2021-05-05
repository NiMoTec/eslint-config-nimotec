module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/airbnb',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    require.resolve('./lib/shared.js'),
  ],
};
