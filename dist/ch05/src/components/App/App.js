'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _appStyle = require('./appStyle');

var _appStyle2 = _interopRequireDefault(_appStyle);

var _NavLink = require('../NavLink');

var _NavLink2 = _interopRequireDefault(_NavLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            'React Router Tutorial'
        ),
        _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouter.IndexLink,
                    { to: '/', activeClassName: 'active' },
                    'Home'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/about', activeStyle: { color: 'green' } },
                    'About'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/repos/react-router', activeStyle: _appStyle2.default.active },
                    'Repos'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/user', activeClassName: 'active' },
                    'User'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _NavLink2.default,
                    { to: '/contacts' },
                    'Contacts'
                )
            )
        ),
        props.children
    );
};

App.propTypes = {
    children: _react2.default.PropTypes.object
};

exports.default = App;
//# sourceMappingURL=App.js.map