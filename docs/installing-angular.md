# Installing Angular

Below are instructions on adding Angular libraries.

```bash
npm install --save-dev @nrwl/angular
```

before creating the app, it usually is beneficial to change some defaults from the top-level workspace file:

```json
"generators": {
  "@nrwl/angular:application": {
    "style": "scss",
    "linter": "eslint",
    "unitTestRunner": "jest",
    "e2eTestRunner": "cypress"
  },
  "@nrwl/angular:library": {
    "style": "scss",
    "linter": "eslint",
    "unitTestRunner": "jest"
  },
  "@nrwl/angular:component": {
    "style": "scss",
    "changeDetection": "OnPush",
    "skipTests": true
  }
},
```

and creating a new app with:

```bash
nx g @nrwl/angular:application <app-name> --strict --inlineStyle=true \
  --style=scss --standaloneConfig=true
```

This should add the necessary libraries for angular.

To create a library:

```bash
nx g @nrwl/angular:lib <lib-name>
```

## New approach to development:

1. Create the client app, which will be the main deployment target.
2. Create **libraries** for each feature, which allow them to be re-used.
3. Create sub-folders for each individual library module

## More docs

<https://nx.dev/latest/angular/angular/application>
