# Faster windows ts-node

Below is a snippet that updates how powershell handles ts-node executions,
which should make calling `tools` faster.

```powershell
$env:TS_NODE_FILES="true"
$env:TS_NODE_TRANSPILE_ONLY="true"
```
