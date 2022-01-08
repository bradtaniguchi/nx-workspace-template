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
  window.projectGraphResponse = {"hash":"4d67c77f0532dd40fd6edab7dfa0fd37c6f2a7c50e1331dba873ef5453b70b8d","projects":[{"name":"common-material","type":"lib","data":{"tags":["type:lib"],"root":"libs/common-material","files":[]}},{"name":"docs-generator","type":"lib","data":{"tags":["type:tool"],"root":"tools/docs-generator","files":[]}},{"name":"build-config","type":"lib","data":{"tags":["type:tool"],"root":"tools/build-config","files":[]}},{"name":"gh-codespaces","type":"lib","data":{"tags":["type:lib"],"root":"libs/gh-codespaces","files":[]}},{"name":"script-loader","type":"lib","data":{"tags":["type:lib"],"root":"libs/script-loader","files":[]}},{"name":"common-ngrx","type":"lib","data":{"tags":["type:lib"],"root":"libs/common-ngrx","files":[]}},{"name":"dep-graph","type":"lib","data":{"tags":["type:tool"],"root":"tools/dep-graph","files":[]}},{"name":"common-ng","type":"lib","data":{"tags":["type:lib"],"root":"libs/common-ng","files":[]}},{"name":"common","type":"lib","data":{"tags":["type:lib"],"root":"libs/common","files":[]}}],"dependencies":{"common-material":[],"docs-generator":[],"build-config":[],"gh-codespaces":[],"script-loader":[],"common-ngrx":[{"source":"common-ngrx","target":"common","type":"static"}],"dep-graph":[],"common-ng":[{"source":"common-ng","target":"common","type":"implicit"}],"common":[]},"layout":{"appsDir":"apps","libsDir":"libs"},"affected":[],"focus":null,"groupByFolder":false,"exclude":[]};