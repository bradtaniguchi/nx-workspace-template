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
  window.projectGraphResponse = {"hash":"6e0888011fba87881c8e08bd23c5f69d0723286409e454e628834df479a46471","projects":[{"name":"common-material","type":"lib","data":{"tags":["type:lib"],"root":"libs/common-material","files":[]}},{"name":"internal-ng-e2e","type":"e2e","data":{"tags":[],"root":"apps/internal-ng-e2e","files":[]}},{"name":"gh-codespaces","type":"lib","data":{"tags":["type:lib"],"root":"libs/gh-codespaces","files":[]}},{"name":"script-loader","type":"lib","data":{"tags":["type:lib"],"root":"libs/script-loader","files":[]}},{"name":"common-ngrx","type":"lib","data":{"tags":["type:lib"],"root":"libs/common-ngrx","files":[]}},{"name":"internal-ng","type":"app","data":{"tags":["type:app"],"root":"apps/internal-ng","files":[]}},{"name":"common-ng","type":"lib","data":{"tags":["type:lib"],"root":"libs/common-ng","files":[]}},{"name":"common","type":"lib","data":{"tags":["type:lib"],"root":"libs/common","files":[]}}],"dependencies":{"common-material":[],"internal-ng-e2e":[{"source":"internal-ng-e2e","target":"internal-ng","type":"implicit"}],"gh-codespaces":[],"script-loader":[],"common-ngrx":[{"source":"common-ngrx","target":"common","type":"static"}],"internal-ng":[{"source":"internal-ng","target":"common-material","type":"implicit"},{"source":"internal-ng","target":"common-ng","type":"implicit"}],"common-ng":[{"source":"common-ng","target":"common","type":"implicit"}],"common":[]},"layout":{"appsDir":"apps","libsDir":"libs"},"affected":[],"focus":null,"groupByFolder":false,"exclude":[]};