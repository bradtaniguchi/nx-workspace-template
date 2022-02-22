# storybook

This library is used as a "barrel" lib for storybook components from multiple libs.

More docs on storybook can be found here:
https://nx.dev/storybook/overview-angular

## Running unit tests

Run `nx test storybook` to execute the unit tests.

## Generating stories:

To generate stories for a given project use:

```bash
nx g @nrwl/angular:stories <project-name>
```

## Running global storybook

To run storybook, with all the stories use the following:

```bash
nx run storybook:storybook
```

## Running storybook with composition:


```
nx run-many --target=storybook --all --parallel=2
```