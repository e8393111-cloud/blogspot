module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: { presets: ['@babel/preset-react'] },
  },
  plugins: ['react', 'react-native'],
  extends: ['plugin:react/recommended'],
  env: { browser: true, es2021: true, 'react-native/react-native': true },
  settings: { react: { version: 'detect' } },
  rules: {
    'no-unused-vars': 'warn',
    'no-undef': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
