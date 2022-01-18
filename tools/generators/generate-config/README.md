# generate config

This generator is used to create a "build-config" file that is used by "build-config" utilities
within `common-ng`. This file provides some basic information about the current build, like the
Angular version and git sha.

## Running this generator

```bash
nx workspace-generator generate-config --path=./dist/example/config.json
```
