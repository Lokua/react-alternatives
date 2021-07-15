module.exports = {
  extends: ['lokua'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'no-unused-vars': [
      2,
      {
        varsIgnorePattern: 'h',
      },
    ],
  },
}
