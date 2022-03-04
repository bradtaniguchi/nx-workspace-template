const { readFile, writeFile } = require('fs').promises;

/**
 * This script should be called before running lighthouse when running
 * against the production build of internal-ng.
 *
 * Due to the default lighthouse ci/cd pipeline currently used
 * the index.html has a baseurl that is different than `/`.
 *
 * We replace the value within `index.html` with `/` so
 * lighthouse can run against it.
 */
(async () => {
  try {
    const path = './dist/apps/internal-ng/index.html';
    console.log('>> running pre-lighthouse...');
    const content = await readFile(path, 'utf8');
    const newContent = content.replace(
      'https://bradtaniguchi.dev/nx-workspace-template/',
      '/'
    );
    await writeFile(path, newContent);
    console.log('>> done running pre-lighthouse');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
