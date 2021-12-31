# Dep Graph

This tool is used to manage and interface with the `nx dep-graph` command. Its primary purpose is to provide a sensible and "similar" interface to that of other repo-level tooling.

## generate html docs

```bash
nx run dep-graph:html
```

## serve generated html docs

```bash
nx run dep-graph:serve
```

The build will be available at port: http://localhost:4401
