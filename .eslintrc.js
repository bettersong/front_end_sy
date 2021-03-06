module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  plugins: ["vue", "html"],
  rules: {
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-constant-condition": ["error", { checkLoops: false }],
    "prefer-const": "warn",
    "vue/no-use-v-if-with-v-for": "off",
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
