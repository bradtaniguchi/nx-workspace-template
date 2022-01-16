import { logger, readJsonFile, Tree, writeJsonFile } from '@nrwl/devkit';
import { exec } from 'child_process';

export interface Schema {
  /**
   * Output path and name for the generated config file.
   *
   * If not given, defaults to `dist/config.json`.
   */
  path?: string;
}

/**
 * Promise wrapper around child_process.exec.
 */
const execute = (bashStr: string) =>
  new Promise((resolve, reject) =>
    exec(bashStr, (err, stdout, stderr) =>
      err || stderr ? reject(err || stderr) : resolve(stdout.toString().trim())
    )
  );

const getRevision = () => execute('git rev-parse --short HEAD');

const getFileExists = (path: string) => {
  try {
    readJsonFile(path);
    return true;
  } catch (err) {
    return false;
  }
};

const getAngularVersion = () =>
  readJsonFile('package.json').dependencies['@angular/core'];

export default async function (tree: Tree, schema: Schema) {
  logger.log('starting generate-config...');
  let path = schema.path || 'dist/config.json';
  logger.log('creating file at: ', path);
  const [fileExists, revision] = await Promise.all([
    getFileExists(path),
    getRevision(),
  ]);
  if (fileExists) return logger.log('file already exists, skipping');
  const contents = {
    revision,
    angularVersion: getAngularVersion(),
    time: new Date(),
  };
  logger.log('creating file with contents: ', contents);
  writeJsonFile(path, contents);
  logger.log('created file at path', path);
}
