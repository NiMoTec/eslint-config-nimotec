module.exports = {
  extends: ['./index.js'].map(require.resolve),
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
};
