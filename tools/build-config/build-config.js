const { exec } = require('child_process');
const { constants } = require('fs');
const { access, readFile, writeFile } = require('fs/promises');
const { join } = require('path');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');

/**
 * Promise wrapper around child_process.exec.
 */
const execute = (bashStr) =>
  new Promise((resolve, reject) =>
    exec(bashStr, (err, stdout, stderr) =>
      err || stderr ? reject(err || stderr) : resolve(stdout.toString().trim())
    )
  );

const getRevision = () => execute('git rev-parse --short HEAD');

const getFileExists = (path) =>
  access(path, constants.F_OK)
    .then(() => true)
    .catch(() => false);

const getAngularVersion = () =>
  readFile(join(__dirname, '../../package.json'), 'utf8').then(
    (data) => JSON.parse(data).dependencies['@angular/core']
  );

const getJson = ({ revision, angularVersion }) => `{
  "revision": "${revision}",
  "ngVersion": "${angularVersion}",
  "time": "${new Date()}"
}

`;

(async () => {
  try {
    console.log('starting build config...');
    const { argv } = yargs(hideBin(process.argv));
    let { path } = argv;
    path = path || 'dist/config.json';
    path = join(__dirname, '../../', path);
    console.log('checking path...', { path, argv });
    const [fileExists, revision, angularVersion] = await Promise.all([
      getFileExists(path),
      getRevision(),
      getAngularVersion(),
    ]);
    if (fileExists) {
      console.log('config.json file already exists, done');
      process.exit(0);
    }
    console.log('got hash', revision);

    await writeFile(path, getJson({ revision, angularVersion }));
    console.log(`Output generated at ${path}`);

    console.log('finished build config');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
