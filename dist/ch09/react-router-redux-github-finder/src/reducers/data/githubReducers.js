'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxActions = require('redux-actions');

var _models = require('../../constants/models');

var _actionTypes = require('../../constants/actionTypes');

var githubReducers = (0, _reduxActions.handleActions)({
  // 当使用者按送出按钮，发出 GET_GITHUB_SUCCESS action 时将接收到的资料 merge
  GET_GITHUB_SUCCESS: function GET_GITHUB_SUCCESS(state, _ref) {
    var payload = _ref.payload;
    return state.merge({
      data: payload.data
    });
  },
  // 当使用者输入使用者 ID 会发出 CHAGE_USER_ID action 时将接收到的资料 merge 
  CHAGE_USER_ID: function CHAGE_USER_ID(state, _ref2) {
    var payload = _ref2.payload;
    return state.merge({
      'userId': payload.userId
    });
  }
}, _models.GithubState);

exports.default = githubReducers;
//# sourceMappingURL=githubReducers.js.map