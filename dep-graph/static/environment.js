window.exclude = [];
  window.groupByFolder = false;
  window.watch = false;
  window.environment = 'release';
  window.localMode = 'build';
  
  window.appConfig = {
    showDebugger: false,
    projectGraphs: [
      {
        id: 'local',
        label: 'local',
        url: 'projectGraph.json',
      }
    ],
    defaultProjectGraph: 'local',
  };
  window.projectGraphResponse = {"hash":"158d5e268e1fb4a91324026a224ff3dacbd731725d2eb7be5f64644ef1afc149","projects":[{"name":"common-material","type":"lib","data":{"tags":["type:lib"],"root":"libs/common-material","files":[]}},{"name":"docs-generator","type":"lib","data":{"tags":["type:tool"],"root":"tools/docs-generator","files":[]}},{"name":"internal-ng-e2e","type":"e2e","data":{"tags":[],"root":"apps/internal-ng-e2e","files":[]}},{"name":"build-config","type":"lib","data":{"tags":["type:tool"],"root":"tools/build-config","files":[]}},{"name":"gh-codespaces","type":"lib","data":{"tags":["type:lib"],"root":"libs/gh-codespaces","files":[]}},{"name":"script-loader","type":"lib","data":{"tags":["type:lib"],"root":"libs/script-loader","files":[]}},{"name":"common-ngrx","type":"lib","data":{"tags":["type:lib"],"root":"libs/common-ngrx","files":[]}},{"name":"internal-ng","type":"app","data":{"tags":["type:app"],"root":"apps/internal-ng","files":[]}},{"name":"dep-graph","type":"lib","data":{"tags":["type:tool"],"root":"tools/dep-graph","files":[]}},{"name":"common-ng","type":"lib","data":{"tags":["type:lib"],"root":"libs/common-ng","files":[]}},{"name":"common","type":"lib","data":{"tags":["type:lib"],"root":"libs/common","files":[]}}],"dependencies":{"common-material":[],"docs-generator":[],"internal-ng-e2e":[{"source":"internal-ng-e2e","target":"internal-ng","type":"implicit"}],"build-config":[],"gh-codespaces":[],"script-loader":[],"common-ngrx":[{"source":"common-ngrx","target":"common","type":"static"}],"internal-ng":[{"source":"internal-ng","target":"common-material","type":"implicit"},{"source":"internal-ng","target":"common-ng","type":"implicit"}],"dep-graph":[],"common-ng":[{"source":"common-ng","target":"common","type":"implicit"}],"common":[]},"layout":{"appsDir":"apps","libsDir":"libs"},"affected":[],"focus":null,"groupByFolder":false,"exclude":[]};