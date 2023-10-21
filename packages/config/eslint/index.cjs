module.exports = {
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
      alias: {
        map: [['@types', '../../../types']],
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
  ],
  plugins: ['import', 'eslint-plugin-prettier', 'eslint-plugin-jsx-a11y'],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-promise-executor-return': 'off',
    'no-return-assign': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'no-continue': 'off',
    '@typescript-eslint/ban-types': 'warn',
    camelcase: 'off',
    'no-unused-expressions': 'off',
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'arrow-body-style': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 'error',
    'no-empty-pattern': 'error',
    'prettier/prettier': 'off',
    'import/prefer-default-export': 'off',
    'import/order': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-console': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
