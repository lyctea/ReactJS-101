'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = _immutable2.default.Map();

exports.default = (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxLogger2.default)({ stateTransformer: function stateTransformer(state) {
    return state.toJS();
  } })));

//运用 redux 提供的 createStore API 把 rootReducer、initialState、middlewares 整合后创建出 store
//# sourceMappingURL=configureStore.js.map