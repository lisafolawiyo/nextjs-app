module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  tabWidth: 2,
  importOrder: ['^react$', '<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderSortByLength: 'asc',
  plugins: [
    'prettier-plugin-tailwindcss',
    '@trivago/prettier-plugin-sort-imports',
  ],
};
