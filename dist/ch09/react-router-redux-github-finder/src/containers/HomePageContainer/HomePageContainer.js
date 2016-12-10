'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _HomePage = require('../../components/HomePage');

var _HomePage2 = _interopRequireDefault(_HomePage);

var _actions = require('../../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//负责将 userId 和使用到的事件处理方法用 props 传进 component
exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    userId: state.getIn(['github', 'userId'])
  };
}, function (dispatch) {
  return {
    onChangeUserId: function onChangeUserId(event) {
      return dispatch((0, _actions.changeUserId)(event.target.value));
    },
    onSubmitUserId: function onSubmitUserId(userId) {
      return function () {
        return dispatch((0, _actions.getGithub)(userId));
      };
    }
  };
}, function (stateProps, dispatchProps, ownProps) {
  var userId = stateProps.userId;
  var onSubmitUserId = dispatchProps.onSubmitUserId;

  return Object.assign({}, stateProps, dispatchProps, ownProps, {
    onSubmitUserId: onSubmitUserId(userId)
  });
})(_HomePage2.default);
//# sourceMappingURL=HomePageContainer.js.map