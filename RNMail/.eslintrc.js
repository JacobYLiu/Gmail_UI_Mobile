module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['prettier'],
  rules: {
    '@typescript-eslint/no-unused-vars': [
    'error', 
    {
      argsIgnorePattern: '^_'
    }  
    ],
    'no-uunsed-vars': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 1,
    'no-under': 'off',
   },
  }
