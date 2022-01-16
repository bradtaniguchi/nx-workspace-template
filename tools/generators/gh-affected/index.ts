import { logger, Tree } from '@nrwl/devkit';
import * as childProcess from 'child_process';
import { promisify } from 'util';
const exec = promisify(childProcess.exec);

export default async function (
  _: Tree,
  schema: {
    /**
     * The target to run on the affected
     */
    target: string;
    /**
     * The head of the current branch (usually HEAD)
     */
    head?: string;
    /**
     * How many tasks should be batch together.
     * By default this is 1, so each task is run in its own process.
     */
    batch?: number;
    /**
     * If we are to just return the `id`, rather than the entire task object.
     */
    bare?: boolean;
  }
) {
  const { target, head, batch, bare } = schema;
  const isMain = head === 'refs/heads/main';
  const BASE_SHA = isMain ? 'origin/main~1' : 'origin/main';
  const output = await exec(
    `npx nx print-affected --base=${BASE_SHA} --target=${target}`
  );
  const affected = JSON.parse(output.stdout);
  const tasks = affected.tasks;
  const toBare = (tasks: Array<unknown>) =>
    tasks.map((task: { id?: string }) =>
      task && typeof task.id === 'string' ? task.id : ''
    );
  if (!batch) {
    if (bare) return logger.log(JSON.stringify(toBare(tasks)));
    return logger.log(JSON.stringify(tasks));
  }
  const batchedTasks: unknown[] = [];
  const batchSize = Math.ceil(tasks.length / batch);
  for (let i = 0; i < tasks.length; i += batchSize)
    batchedTasks.push(tasks.slice(i, i + batchSize));
  if (bare) return logger.log(JSON.stringify(toBare(batchedTasks)));
  logger.log(JSON.stringify(batchedTasks));
}
