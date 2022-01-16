# gh-affected

This generator is used to print out the affected projects within a github-actions context.
This replaces the traditional `run-many` and `gen-matrix` scripts.

Under the hood this primarily just manipulates the `nx print-affected` command directly

## Usage

```bash
nx workspace-generator gh-affected --target=lint
```

## Output

Using the above command, the following output is printed to stdout:

```js
[
  {
    id: 'common-ngrx:lint',
    overrides: {},
    target: { project: 'common-ngrx', target: 'lint' },
    command: 'npx nx run common-ngrx:lint',
    outputs: [],
  },
  {
    id: 'internal-ng:lint',
    overrides: {},
    target: { project: 'internal-ng', target: 'lint' },
    command: 'npx nx run internal-ng:lint',
    outputs: [],
  },
  {
    id: 'internal-ng-e2e:lint',
    overrides: {},
    target: { project: 'internal-ng-e2e', target: 'lint' },
    command: 'npx nx run internal-ng-e2e:lint',
    outputs: ['undefined'],
  },
  {
    id: 'common:lint',
    overrides: {},
    target: { project: 'common', target: 'lint' },
    command: 'npx nx run common:lint',
    outputs: [],
  },
  {
    id: 'common-ng:lint',
    overrides: {},
    target: { project: 'common-ng', target: 'lint' },
    command: 'npx nx run common-ng:lint',
    outputs: [],
  },
  {
    id: 'gh-codespaces:lint',
    overrides: {},
    target: { project: 'gh-codespaces', target: 'lint' },
    command: 'npx nx run gh-codespaces:lint',
    outputs: ['undefined'],
  },
  {
    id: 'script-loader:lint',
    overrides: {},
    target: { project: 'script-loader', target: 'lint' },
    command: 'npx nx run script-loader:lint',
    outputs: [],
  },
];
```
