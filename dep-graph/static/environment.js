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
  window.projectGraphResponse = {"hash":"9f09272ad8fe25ddacccb9e9d2b7656aa7229438743ed2486f3a7c2f8ab73ecc","projects":[{"name":"common-material","type":"lib","data":{"tags":["type:lib"],"root":"libs/common-material","files":[]}},{"name":"docs-generator","type":"lib","data":{"tags":["type:tool"],"root":"tools/docs-generator","files":[]}},{"name":"gh-codespaces","type":"lib","data":{"tags":["type:lib"],"root":"libs/gh-codespaces","files":[]}},{"name":"script-loader","type":"lib","data":{"tags":["type:lib"],"root":"libs/script-loader","files":[]}},{"name":"common-ngrx","type":"lib","data":{"tags":["type:lib"],"root":"libs/common-ngrx","files":[]}},{"name":"dep-graph","type":"lib","data":{"tags":["type:tool"],"root":"tools/dep-graph","files":[]}},{"name":"ng-logger","type":"lib","data":{"tags":["type:lib"],"root":"libs/ng-logger","files":[]}},{"name":"common","type":"lib","data":{"tags":["type:lib"],"root":"libs/common","files":[]}}],"dependencies":{"common-material":[],"docs-generator":[],"gh-codespaces":[],"script-loader":[],"common-ngrx":[{"source":"common-ngrx","target":"common","type":"static"}],"dep-graph":[],"ng-logger":[{"source":"ng-logger","target":"common","type":"implicit"}],"common":[]},"layout":{"appsDir":"apps","libsDir":"libs"},"affected":[],"focus":null,"groupByFolder":false,"exclude":[]};