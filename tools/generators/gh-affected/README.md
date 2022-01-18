# gh-affected

This generator is used to print out the affected projects within a github-actions context.
This replaces the traditional `run-many` and `gen-matrix` scripts.

Under the hood this primarily just manipulates the `nx print-affected` command directly

## Usage

This generator can be used in one of two ways.

1. "flat" mode, which will print out the list of affected projects for the given `target`.
   This is essentially the same as the `nx print-affected` command, except simplified down to just the `target.project` property.
2. "batch" mode, which will print out the list of affected projects, except in "batched" arrays.
   This allows for matrix-related features of github-actions to be leveraged.

The batch mode is the primary mode this utility should be used, to get the most out of github-actions.

### Batch Mode

**Example:**

```bash
npx nx workspace-generator gh-affected --target=lint --head=<HEAD> --batch=3
```

**Output:**

```json
[
  ["common-ngrx", "internal-ng", "internal-ng-e2e"],
  ["common", "common-ng", "gh-codespaces"]
]
```

## Flat Mode

**Example:**

```bash
npx nx workspace-generator gh-affected --target=lint --head=<HEAD>
```

**Output:**

```json
[
  "common-ngrx",
  "internal-ng",
  "internal-ng-e2e",
  "common",
  "common-ng",
  "gh-codespaces",
  "script-loader"
]
```
