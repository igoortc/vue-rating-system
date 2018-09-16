module.exports = {
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'no-new': 'off',
    'vue/require-prop-types': 'off'
  },
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  globals: {
    expect: true
  }
}