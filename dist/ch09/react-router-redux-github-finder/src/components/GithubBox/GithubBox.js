'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Card = require('material-ui/Card');

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _home = require('material-ui/svg-icons/action/home');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 引入 material-ui 的 RaisedButton
var GithubBox = function GithubBox(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, {
        title: props.data.get('name'),
        subtitle: props.userId,
        avatar: props.data.get('avatar_url')
      }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        'Followers : ',
        props.data.get('followers')
      ),
      _react2.default.createElement(
        _Card.CardText,
        null,
        'Following : ',
        props.data.get('following')
      ),
      _react2.default.createElement(
        _Card.CardActions,
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/' },
          _react2.default.createElement(_RaisedButton2.default, {
            label: 'Back',
            icon: _react2.default.createElement(_home2.default, null),
            secondary: true
          })
        )
      )
    )
  );
};
// 引入 ActionHome icon

// 引入 material-ui 的卡片式组件


GithubBox.propTypes = {
  props: _react2.default.PropTypes.Object
};

exports.default = GithubBox;
//# sourceMappingURL=GithubBox.js.map