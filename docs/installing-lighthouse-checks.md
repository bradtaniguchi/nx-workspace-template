# Installing lighthouse checks

Lighthouse checks can be applied using the files in the `.lighthouse` folder,
and can be ran inside of a github-action check with code similar to:

```yaml
 - name: run-lighthouse-ci
    uses: treosh/lighthouse-ci-action@v7
    with:
      configPath: ./.lighthouse/lighthouserc.json
      budgetPath: ./.lighthouse//lighthouse-budget.json
      temporaryPublicStorage: true
      uploadArtifacts: true
```
