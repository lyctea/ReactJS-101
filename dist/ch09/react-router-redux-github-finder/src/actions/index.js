'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uiActions = require('./uiActions');

Object.keys(_uiActions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _uiActions[key];
    }
  });
});

var _githubActions = require('./githubActions');

Object.keys(_githubActions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _githubActions[key];
    }
  });
});
//# sourceMappingURL=index.js.map