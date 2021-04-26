# @nimotec/eslint-config

ESLint Config for all NiMoTec projects

## What's included

This config mainly extends:

- [eslint-config-airbnb-typescript](https://www.npmjs.com/package/eslint-config-airbnb-typescript)
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
- [eslint-plugin-vue](https://eslint.vuejs.org/rules/#priority-c-recommended-minimizing-arbitrary-choices-and-cognitive-overhead-for-vue-js-3-x)

**Note:** See `package.json` dependencies for the exact external configs extended by this ESLint config.

## Installation

Install `@nimotec/eslint-config`:

```sh
npm install --save-dev @nimotec/eslint-config
```

Then add this config to the `extends` array in your ESLint file.

## Example configuration

### TypeScript projects

```json
{
  "extends": ["@nimotec"]
}
```

### Vue projects

```json
{
  "extends": ["@nimotec", "@nimotec/eslint-config/vue"]
}
```

## FAQ

### Why does the config for Vue require the `eslint-config` after `@nimotec/`?

Read more about how ESLint resolves npm scoped modules [here](https://eslint.org/docs/developer-guide/shareable-configs#npm-scoped-modules).
