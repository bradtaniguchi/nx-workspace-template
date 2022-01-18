# nrwl-utils

This folder will hold `js` scripts that can be used in conjunction with the `nx` cli,
and github. Primarily to leverage github-action capabilities.

## run-many

This script utility was taken from [this blog post](https://medium.com/emoteev-blog/10x-faster-ci-with-nx-and-github-actions-9a51fc4e82a6)
and is used to run multiple targets, for multiple projects in `nx`.

## gen-matrix

Below is notes for an experimental script that generates a matrix of targets from `nx print-affected`.

Example call:

```
nx print-affected --base-origin/main --target=build
```

example output:

```json
{
  "tasks": [
    {
      "id": "common:lint",
      "overrides": {},
      "target": {
        "project": "common",
        "target": "lint"
      },
      "command": "npx nx run common:lint",
      "outputs": []
    },
    {
      "id": "common-ngrx:lint",
      "overrides": {},
      "target": {
        "project": "common-ngrx",
        "target": "lint"
      },
      "command": "npx nx run common-ngrx:lint",
      "outputs": []
    },
    {
      "id": "ng-logger:lint",
      "overrides": {},
      "target": {
        "project": "ng-logger",
        "target": "lint"
      },
      "command": "npx nx run ng-logger:lint",
      "outputs": []
    }
  ],
  "projects": ["common", "common-ngrx", "ng-logger"],
  "projectGraph": {
    "nodes": [
      "common-material",
      "docs-generator",
      "gh-codespaces",
      "script-loader",
      "common-ngrx",
      "ng-logger",
      "common"
    ],
    "dependencies": {
      "common-material": [],
      "docs-generator": [],
      "gh-codespaces": [],
      "script-loader": [
        {
          "source": "script-loader",
          "target": "npm:@angular/core",
          "type": "static"
        },
        {
          "source": "script-loader",
          "target": "npm:rxjs",
          "type": "static"
        },
        {
          "source": "script-loader",
          "target": "npm:@angular/common",
          "type": "static"
        },
        {
          "source": "script-loader",
          "target": "npm:jest-preset-angular",
          "type": "static"
        }
      ],
      "common-ngrx": [
        {
          "source": "common-ngrx",
          "target": "npm:@angular/core",
          "type": "static"
        },
        {
          "source": "common-ngrx",
          "target": "npm:@angular/common",
          "type": "static"
        },
        {
          "source": "common-ngrx",
          "target": "npm:@ngrx/store",
          "type": "static"
        },
        {
          "source": "common-ngrx",
          "target": "common",
          "type": "static"
        },
        {
          "source": "common-ngrx",
          "target": "npm:jest-preset-angular",
          "type": "static"
        }
      ],
      "ng-logger": [
        {
          "source": "ng-logger",
          "target": "common",
          "type": "implicit"
        },
        {
          "source": "ng-logger",
          "target": "npm:@angular/core",
          "type": "static"
        },
        {
          "source": "ng-logger",
          "target": "npm:@angular/common",
          "type": "static"
        },
        {
          "source": "ng-logger",
          "target": "npm:jest-preset-angular",
          "type": "static"
        }
      ],
      "common": []
    }
  }
}
```

Example output:

```json
[
  {
    "id": "common:lint",
    "project": "common",
    "target": "lint",
    "dependencies": []
  },
  {
    "id": "common-ngrx:lint",
    "project": "common-ngrx",
    "target": "lint",
    "dependencies": []
  },
  {
    "id": "ng-logger:lint",
    "project": "ng-logger",
    "target": "lint",
    "dependencies": ["common:lint"]
  },
  {
    "id": "common:test",
    "project": "common",
    "target": "test",
    "dependencies": []
  },
  {
    "id": "common-ngrx:test",
    "project": "common-ngrx",
    "target": "test",
    "dependencies": []
  },
  {
    "id": "ng-logger:test",
    "project": "ng-logger",
    "target": "test",
    "dependencies": ["common:test"]
  }
]
```
