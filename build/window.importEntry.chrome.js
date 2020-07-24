/**
* This file is dynamically generated.
*/
window.appConfig = window.appConfig || {};
window.importEntry = (entry) => {
  switch (entry) {
      case "test.index":
          return import("../build/test.index.js");
      case "harbor/demo/hbr-layout-demo":
          return import("../src/demo/hbr-layout-demo/hbr-layout-demo.js");
      default:
          return Promise.reject(`importEntry: entry "${entry}" not found`);
  }
};
window.appConfig.basePath = "/";
__webpack_public_path__ = window.appConfig.basePath;
