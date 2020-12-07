module.exports = {
  singleQuote: true,
  bracketSpacing: true,
  arrowParens: 'always',
  printWidth: 80,
  overrides: [
    {
      files: '*.scss',
      options: {
        singleQuote: false
      }
    }
  ],
  quoteProps: 'preserve'
};
