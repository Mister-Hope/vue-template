module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:all',
    // 'eslint:recommended',
    '@vue/airbnb',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // 自定义
    'arrow-parens': ['error', 'as-needed'],
    // 'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'comma-dangle': ['error', 'never'],
    curly: ['error', 'multi'],
    'nonblock-statement-body-position': ['error', 'any'],
    'no-param-reassign': ['error', { props: false }]
    // 暂时禁用的自定义规则
    // 因为vue的原因此项需要设置off
    // 'class-methods-use-this': 'off',
    // 'array-element-newline': ['error', 'consistent'],
    // 防止因为自动换行造成的报错
    // 'implicit-arrow-linebreak': ['off', 'beside'],
    // 简化代码，忽略迷惑的箭头函数提示
    // 'no-confusing-arrow': 'off',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
};
