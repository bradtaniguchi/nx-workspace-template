# Deploy to GCP app engine

Deployments to GCP App Engine are still a WIP at this time.

Probably will use the following:
<https://github.com/google-github-actions/deploy-appengine>

## App engine spec example

Below is a **starting point** app engine yaml:

```yaml
runtime: nodejs14

handlers:
  - url: /
    static_dir: ./public
    secure: always

  - url: /api/.*
    secure: always
    script: auto
```
