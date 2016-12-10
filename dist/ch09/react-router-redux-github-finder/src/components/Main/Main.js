'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = function Main(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_AppBar2.default, {
      title: 'Github Finder',
      showMenuIconButton: false
    }),
    _react2.default.createElement(
      'div',
      null,
      props.children
    )
  );
};

// 进行 propTypes 验证

// 引入 AppBar
Main.propTypes = {
  children: _react2.default.PropTypes.object
};

exports.default = Main;
//# sourceMappingURL=Main.js.map