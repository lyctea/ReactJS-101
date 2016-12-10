'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeUserId = exports.getGithub = undefined;

require('whatwg-fetch');

var _actionTypes = require('../constants/actionTypes');

var _uiActions = require('./uiActions');

/* 这边是这个范例的重点，要学习我们之前尚未讲解的非同步 action 处理方式：不同于一般同步 action
直接发送 action，非同步 action 会回传一个带有 dispatch 参数的 function，里面使用了 Ajax
（这里使用 fetch()）进行处理

 一般和 API 互动的流程：INIT（开始请求/秀出 spinner）-> COMPLETE（完成请求/隐藏 spinner）-> ERROR（请求失败）
 这次我们虽然没有使用 redux-actions 但我们还是维持标准 Flux Standard Action 格式：{ type: '', payload: {} }
 */

//引入 actionTypes 常数
var getGithub = exports.getGithub = function getGithub() {
  var userId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'torvalds';

  return function (dispatch) {
    dispatch({ type: _actionTypes.GET_GITHUB_INITIATE });
    dispatch((0, _uiActions.showSpinner)());
    fetch('https://api.github.com/users/' + userId).then(function (response) {
      return response.json();
    }).then(function (json) {
      dispatch({ type: _actionTypes.GET_GITHUB_SUCCESS, payload: { data: json } });
      dispatch((0, _uiActions.hideSpinner)());
    }).catch(function (response) {
      dispatch({ type: _actionTypes.GET_GITHUB_FAIL });
    });
  };
};

// 同步 actions 处理，回传 action 物件

//现在我们来规划我们的 actions 的部份，这个范例我们使用到了 `redux-thunk`
// 来处理非同步的 action（若读者对于新的 Ajax 处理方式 fetch() 不熟悉可以先
// [参考这个文件](https://developer.mozilla.org/zh-TW/docs/Web/API/GlobalFetch/fetch)）


// 引入 uiActions 的 action
//这边引入了 fetch 的 polyfill，兼容旧的浏览器也可以使用 fetch
var changeUserId = exports.changeUserId = function changeUserId(text) {
  return { type: _actionTypes.CHAGE_USER_ID, payload: { userId: text } };
};
//# sourceMappingURL=githubActions.js.map