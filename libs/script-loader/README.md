# script-loader

This library provides a client-side service taken from previous projects, to dynamically
load normal JS scripts.

## Running unit tests

Run `nx test script-loader` to execute the unit tests.

## Example usage

The below example is to setup google analytics dynamically for each environment.

```typescript
// app module imports
ScriptLoaderModule.forRoot({
  scripts: [
    ...(environment.googleAnalytics
      ? [
          {
            src: `https://www.googletagmanager.com/gtag/js?id=${environment.googleAnalytics}`,
            async: true,
            preLoad: () => {
              (window as any).dataLayer = (window as any).dataLayer || [];
              window.gtag = function () {
                (window as any).dataLayer.push(arguments);
              };
              gtag('js', new Date());
              gtag('config', environment.googleAnalytics);
            }
          } as ScriptParams
        ]
      : [])
  ]
```
