# Deploy to github pages

Using github pages is useful for client-side-only applications.
The following is the snippet to add to the end of the pipeline for deployment:

```yaml
- name: deploy-to-ghpages
  # only execute if on main branch
  if: ${{ github.ref == 'refs/heads/main' }}
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./dist/static
```

Also, to support gh-page deployments the following changes need to be made
in the application:

- [ ] `baseUrl` needs to be changed to the "base path" or name of the repo,
      otherwise it will collide with the base github-page.
      This can be updated in the `project.json` file for the client-side.
- [ ] the `index.html` base path, which defaults to `/` needs to match with
      the `baseUrl`
- [ ] the route method, in `app-routing.module`, should be "hash" based,
      otherwise reloading the page wont work as expected.
