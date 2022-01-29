# Docs Generator

This tool is used to generate all library documentation using compodoc.

To generate HTML docs use:

```bash
npx compodoc -p tools/docs/tsconfig.docs.json --output=dist/docs/
```

once built, use the following to serve them locally

```bash
npx http-server dist/docs -p 4200
```

they will then be available at port: http://localhost:4200/
