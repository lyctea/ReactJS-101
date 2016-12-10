'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function HomePage(_ref) {
  var userId = _ref.userId,
      onSubmitUserId = _ref.onSubmitUserId,
      onChangeUserId = _ref.onChangeUserId;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_TextField2.default, {
      hintText: 'Please Key in your Github User Id.',
      onChange: onChangeUserId
    }),
    _react2.default.createElement(
      _reactRouter.Link,
      { to: {
          pathname: '/result',
          query: { userId: userId }
        } },
      _react2.default.createElement(_RaisedButton2.default, { label: 'Submit', onClick: onSubmitUserId(userId), primary: true })
    )
  );
};
// 使用 react-router 的 Link 当做超连结，传送 userId 当作 query
exports.default = HomePage;
//# sourceMappingURL=HomePage.js.map