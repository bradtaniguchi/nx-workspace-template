# Build Config

This tool is used to generate a `config.json` file, that can then be
used by the `build-config` service of the `common-ng` lib.

## generate config.json

```bash
nx run build-config:generate
```

or to specify the output path+file:

```bash
nx run build-config:generate --path=./dist/example/config.json
```
