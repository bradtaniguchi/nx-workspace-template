// spec docs:
// https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md
module.exports = {
  ci: {
    assert: {
      budgetsFile: './.lighthouse/lighthouse-budget.json',
    },
    collect: {
      port: 4200,
      isSinglePageApplication: true,
      // wait for only 10 seconds
      maxWaitForLoad: 10_000,
      numberOfRuns: 1,
      // this is for local, not sure if it works for CI
      chromePath: '/usr/bin/google-chrome',
      settings: {
        chromeFlags: '--disable-gpu --no-sandbox',
      },
    },
  },
};
