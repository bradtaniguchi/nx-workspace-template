const util = require('util');
const exec = util.promisify(require('child_process').exec);

const [branch] = process.argv.slice(2);
const isMaster = branch === 'refs/heads/main';
const BASE_SHA = isMaster ? 'origin/main~1' : 'origin/main';

/**
 * This is the set of default tasks always ran. If the project requires more,
 * then add them here.
 */
const TARGETS = ['lint', 'test', 'build'];

/**
 * Returns the id of the tasks for the given target. This should be the first
 * step in building the matrix.
 * @param {string} target the target we are to run. e.g. 'build'
 * @returns {Promise<string[]>} the tasks to run for the given target.
 */
const getTaskIds = (target) =>
  exec(
    `npx nx print-affected --base=${BASE_SHA} --target=${target} --select=tasks.id`
  ).then((ids) =>
    ids.stdout.toString('utf-8').replace('\n', '').split(', ').filter(Boolean)
  );

/**
 * Returns the project id from the task-id. The task-id is split
 * between the "target" and the actual project id. e.g. `common:lint`, where
 * `common` is the project id, and `lint` is the target.
 *
 * The project-id can be used to gather the implicit dependencies.
 * @param {string} taskId the task id to split.
 * @returns {string} the project id.
 */
const getProjectIdFromTaskId = (taskId) => {
  if (typeof taskId !== 'string' || !taskId.includes(':'))
    throw new Error('Invalid task id: ' + taskId);
  return taskId.split(':')[0];
};

/**
 * Does the reverse of the `getProjectIdFromTaskId`, and returns the
 * task id from the projectId and task.
 * @param {string} projectId
 * @param {string} task
 * @returns {string} the task id.
 */
const toTaskIdFromProjectId = (projectId, task) => [projectId, task].join(':');
/**
 * Returns the bare bones affected amount. This should be used as the underlying
 * function to build the implicit dependency part of the matrix.
 * @returns {Promise<object>} returns the output of the `nx print-affected` command.
 */
const printAffected = () =>
  exec(`npx nx print-affected --base=${BASE_SHA}`).then((res) =>
    JSON.parse(res.stdout.toString('utf-8'))
  );

/**
 * Returns the list of implicit dependencies for the given target.
 * @param {object} affected the output of the `nx print-affected` command.
 * @param {string} project the project we are to run.
 * @param {string} target the target we are running, e.g. 'build'
 */
const getImplicitDependencies = (affected, project, target) => {
  const dependencies = affected.projectGraph.dependencies[project];
  if (!dependencies) throw new Error('No dependencies found for ' + project);

  return dependencies
    .filter((dep) => dep.type === 'implicit')
    .map((dep) => toTaskIdFromProjectId(dep.target, target));
};

(async () => {
  try {
    const tasksForTarget = await Promise.all(
      TARGETS.map((target) =>
        getTaskIds(target).then((tasks) =>
          tasks.map((taskId) => ({
            id: taskId,
            project: getProjectIdFromTaskId(taskId),
            target,
          }))
        )
      )
    );

    const affected = await printAffected();

    for (let tasks of tasksForTarget) {
      for (let task of tasks) {
        task.dependencies = getImplicitDependencies(
          affected,
          getProjectIdFromTaskId(task.id),
          task.target
        );
      }
    }

    const flattenedTargets = tasksForTarget.flat();
    console.log(JSON.stringify(flattenedTargets));
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
