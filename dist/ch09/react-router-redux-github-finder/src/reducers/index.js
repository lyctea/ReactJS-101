'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxImmutable = require('redux-immutable');

var _uiReducers = require('./ui/uiReducers');

var _uiReducers2 = _interopRequireDefault(_uiReducers);

var _githubReducers = require('./data/githubReducers');

var _githubReducers2 = _interopRequireDefault(_githubReducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import routes from './routes';

var rootReducer = (0, _reduxImmutable.combineReducers)({
  ui: _uiReducers2.default,
  github: _githubReducers2.default
}); // import routes from './routes';
exports.default = rootReducer;
//将 reduces 使用 redux-immutable 的 combineReducers 在一起
//# sourceMappingURL=index.js.map