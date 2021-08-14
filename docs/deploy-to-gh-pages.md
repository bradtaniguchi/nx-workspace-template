# Deploy to github pages

Using github pages is useful for client-side-only appliations. The following is the snippet to add to the
end of the pipeline for deployment:

```yaml
- name: deploy-to-ghpages
  # only execute if on main branch
  if: ${{ github.ref == 'refs/heads/main' }}
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./dist/static
```