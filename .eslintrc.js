module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'tsx'] }],
    'react/style-prop-object': [0],
    'import/extensions': [0],
    'import/no-unresolved': [0],
    'max-len': [0],
    'react/prop-types': [0],
    'no-use-before-define': 'off',
    'import/no-extraneous-dependencies': ['warn', { devDependencies: true }],
    'camelcase': [2, { ignoreImports: true, properties: 'never' }],
    'space-before-function-paren': [0],
    'react/prop-types': [0],
    'react/jsx-props-no-spreading': [0]
  },
};
