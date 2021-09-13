# Installing Angular

Below are instructions on adding Angular libraries.

```bash
npm install --save-dev @nrwl/angular
```

and creating a new app with:

```bash
nx g @nrwl/angular:application <app-name> --strict --inlineStyle=true \
  --style=scss --standaloneConfig=true
```

## New approach to development:

1. Create the client app, which will be the main deployment target.
2. Create **libraries** for each feature, which allow them to be re-used.
TBD...

## More docs

<https://nx.dev/latest/angular/angular/application>
