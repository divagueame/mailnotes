module.exports = {
  root: true,
  env: {
    browser: true,
    'jest/globals': true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'jest'
  ],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-alert': 'warn'
  }
}
