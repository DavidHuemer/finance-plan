config.set({
  /* Insert Start */
  browsers: ['Chrome', 'ChromeHeadlessCustom'],
  customLaunchers: {
    ChromeHeadlessCustom: {
      base: 'ChromeHeadless',
      flags: ['--no-sandbox', '--disable-gpu']
    }
  },
  /* Insert End */
  ...
});
