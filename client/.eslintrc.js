module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    indent: ['warn', 2],
    'linebreak-style': ['warn', 'unix'],
    quotes: ['warn', 'single'],
    semi: ['warn', 'never'],
    'no-console': ['warn'],
    'no-debugger': ['warn'],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_', args: 'all' }],
    'no-duplicate-imports': ['warn', { includeExports: true }],
    'no-empty': ['warn', { allowEmptyCatch: true }],
  },
  settings: {
    react: {
      version: '17.0',
    },
  },
}
