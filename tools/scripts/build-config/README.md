# Build Config

This tool is used to generate a `config.json` file, that can then be
used by the `build-config` service of the `common-ng` lib.

## generate config.json

```bash
nx run build-config:generate
node ./tools/scripts/build-config
```

or to specify the output path+file:

```bash
node ./tools/scripts/build-config --path=./dist/example/config.json
```


## TODO

This will be moved to a generator, see:

https://nx.dev/generators/workspace-generators