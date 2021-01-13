module.exports = {
  singleQuote: true,
  bracketSpacing: true,
  arrowParens: 'always',
  printWidth: 100,
  overrides: [
    {
      files: '*.scss',
      options: {
        singleQuote: false,
      },
    },
  ],
  quoteProps: 'preserve',
  jsxBracketSameLine: false,
  trailingComma: 'all',
  tabWidth: 2,
  endOfLine: 'auto',
};
