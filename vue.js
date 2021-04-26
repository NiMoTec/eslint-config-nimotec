module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/airbnb',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended',
    require.resolve('./lib/shared.js'),
  ],
};
