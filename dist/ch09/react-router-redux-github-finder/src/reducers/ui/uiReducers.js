'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxActions = require('redux-actions');

var _models = require('../../constants/models');

var _actionTypes = require('../../constants/actionTypes');

// 随着 fetch 结果显示 spinner
var uiReducers = (0, _reduxActions.handleActions)({
  SHOW_SPINNER: function SHOW_SPINNER(state) {
    return state.set('spinnerVisible', true);
  },
  HIDE_SPINNER: function HIDE_SPINNER(state) {
    return state.set('spinnerVisible', false);
  }
}, _models.UiState);

exports.default = uiReducers;
//# sourceMappingURL=uiReducers.js.map