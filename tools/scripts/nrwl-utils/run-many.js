const util = require('util');
const exec = util.promisify(require('child_process').exec);

const [target, jobIndex, jobCount, branch] = process.argv.slice(2);
const isMaster = branch === 'refs/heads/main';
const baseSha = isMaster ? 'origin/main~1' : 'origin/main';

(async () => {
  const affectedProjects = await exec(
    `npx nx print-affected --base=${baseSha} --target=${target} --select=projects`
  ).then((res) => res.stdout.toString('utf-8'));

  const array = affectedProjects
    .split(', ')
    .filter((project) => project !== '\n' && !!project)
    .map((project) => project.replace('\n', ''))
    .sort();

  console.log({ projects: array });
  const sliceSize = Math.max(Math.floor(array.length / jobCount), 1);
  const projects =
    jobIndex < jobCount
      ? array.slice(sliceSize * (jobIndex - 1), sliceSize * jobIndex)
      : array.slice(sliceSize * (jobIndex - 1));

  if (projects.length > 0) {
    await exec(
      `npx nx run-many --target=${target} --projects=${projects} --parallel`,
      {
        stdio: [0, 1, 2],
      }
    );
  }
})();
