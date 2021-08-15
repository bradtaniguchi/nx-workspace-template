# Using storybook and Compodoc

Storybook can be used to help build the UI part of the application.

## Installing library support, with doc support

```bash
npm install --save-dev @nrwl/storybook
```

**note** it is required to setup compodoc to be setup **before** running
storybook, this needs to be done manually with a similar setup like:

```json
"docs-json": {
  "executor": "@nrwl/workspace:run-commands",
  "options": {
    "command": "npx compodoc --tsconfig=apps/client/tsconfig.json \
      --exportFormat=json --output=apps/client"
  }
},
"docs-html": {
  "executor": "@nrwl/workspace:run-commands",
  "options": {
    "command": "npx compodoc --tsconfig=apps/client/tsconfig.json \
      --exportFormat=html --output=dist/docs/client"
  }
},
```

**note** taken from bradtaniguchi.github.io github page code.

## Using storybook on a given project/library to generate stories

```bash
nx g @nrwl/angular:storybook-configuration project-name
```

## More docs

<https://nx.dev/latest/angular/storybook/overview>
