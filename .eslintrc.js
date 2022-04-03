module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      tsx: true,
      jsx: true,
    },
  },
  settings: {
    tsx: {
      version: 'detect',
    },
  },
  ignorePatterns: ['node_modules/', 'dist/'],
  extends: ['plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  rules: {},
}
