// configuration documentation configuration ;) see https://typedoc.org/
module.exports = {
  name: 'UBC Launch Pad Site Configuration Guide',
  theme: 'minimal',
  readme: './CONFIGURING.md',
  entryPoints: [
    'src/config.ts',
    'src/configTypes.ts',
  ],
  out: './dist/config',
  categoryOrder: ['Configuration', '*'],
  defaultCategory: 'Types',
  categorizeByGroup: false,
};
