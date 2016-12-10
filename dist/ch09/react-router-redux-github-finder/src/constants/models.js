'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GithubState = exports.UiState = undefined;

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UiState = exports.UiState = _immutable2.default.fromJS({
  spinnerVisible: false
});

// 我们使用 userId 来暂存使用者 ID，data 存放 Ajax 取回的资料
var GithubState = exports.GithubState = _immutable2.default.fromJS({
  userId: '',
  data: {}
});
//# sourceMappingURL=models.js.map