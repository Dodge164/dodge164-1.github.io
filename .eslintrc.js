module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 0,
    'react/jsx-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'jsx-a11y/label-has-associated-control': ['error', {
      required:
      {
        some: ['nesting', 'id'],
      },
    }],
    'jsx-a11y/label-has-for': ['error', {
      required:
      {
        some: ['nesting', 'id'],
      },
    }],
    'object-curly-newline': ['off', {
      ObjectExpression: 'always',
      ObjectPattern: {
        multiline: true,
      },
      ImportDeclaration: 'never',
      ExportDeclaration: {
        multiline: true, minProperties: 3,
      },
    }],
    'linebreak-style': ['error', 'windows'],
  },
};
