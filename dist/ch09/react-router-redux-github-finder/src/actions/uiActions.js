'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideSpinner = exports.showSpinner = undefined;

var _reduxActions = require('redux-actions');

var _actionTypes = require('../constants/actionTypes');

//// 同步 actions 处理，回传 action 物件
var showSpinner = exports.showSpinner = function showSpinner() {
  return { type: _actionTypes.SHOW_SPINNER };
};
var hideSpinner = exports.hideSpinner = function hideSpinner() {
  return { type: _actionTypes.HIDE_SPINNER };
};
//# sourceMappingURL=uiActions.js.map