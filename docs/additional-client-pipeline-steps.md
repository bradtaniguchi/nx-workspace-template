# Additional Client Pipeline steps

Below are some code snippets that can be used to upgrade the on-push pipeline,
to get more stats and information during builds.

```yaml
- name: Upload json-stats
  uses: actions/upload-artifact@v2
  with:
    name: json-stats
    path: dist/apps/client/stats.json
## skip some steps
- name: Upload cypress files
  uses: actions/upload-artifact@v2
  if: failure()
  with:
    name: cypress-dist
    path: dist/cypress
    retention-days: 5

- name: run-lighthouse-ci
  uses: treosh/lighthouse-ci-action@v7
  with:
    configPath: ./lighthouserc.json
    budgetPath: ./lighthouse-budget.json
    temporaryPublicStorage: true
    uploadArtifacts: true

- name: deploy-to-ghpages
  # only execute if on main branch
  if: ${{ github.ref == 'refs/heads/main' }}
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./dist/static
```
