module.exports = {
  extends: ['@jinpro/eslint-config', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
  rules: {
    'react/display-name': 'off',
    'react/no-unused-prop-types': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-key': 'error',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-no-useless-fragment': 'off',
    'react/button-has-type': 'off',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'error',
  },
};
