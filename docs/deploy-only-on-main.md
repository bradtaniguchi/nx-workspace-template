# Deploy Only on Main

The current workflow is to automatically deploy to the `next` environment
from `main` (or classically called "master")

To add a step that only executes when a commit is executed at that time,
add the following step:

(example uses gh-pages)

```bash
- name: deploy-to-ghpages
  # only execute if on main branch, and not PR
  if: github.ref == 'refs/heads/master' && github.event_name != 'pull_request'
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./dist/static
```
