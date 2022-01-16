import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export interface Schema {
  /**
   * Output path for the generated config file
   */
  path: string;
}

export default async function (tree: Tree, schema: Schema) {
  // TODO: generate config file
  await libraryGenerator(tree, { name: schema.path });
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
