module.exports = {
  extends: ['next', 'airbnb', 'prettier', 'plugin:prettier/recommended'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [
      0,
      { extensions: ['.js', '.jsx', '.ts', 'tsx'] },
    ],
  },
};
