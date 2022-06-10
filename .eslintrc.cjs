22222222222222module.exports = {
  'env': {
    'browser': true,
    'es2022':  true,
    'node':    true,
  },
  'settings': {
    'react': {
      'version': 'detect'
    },
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser':        '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'sourceType':  'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'ignorePatterns': ['dist', 'webpack.config.js', 'tools/seeders'],
  'rules':          {
    '@typescript-eslint/no-explicit-any': 'off',
    'comma-spacing':                      ['error', { 'before': false, 'after': true }],
    'indent':                             ['error', 2],
    'key-spacing':                        ['error', { 'align': 'value' }],
    'linebreak-style':                    ['error', 'unix'],
    'no-trailing-spaces':                 'error',
    'no-useless-escape':                  'off',
    'quotes':                             ['error', 'single'],
    'semi':                               ['error', 'always'],
  }
};
