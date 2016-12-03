'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Repos = require('./components/Repos');

var _Repos2 = _interopRequireDefault(_Repos);

var _About = require('./components/About');

var _About2 = _interopRequireDefault(_About);

var _User = require('./components/User');

var _User2 = _interopRequireDefault(_User);

var _Contacts = require('./components/Contacts');

var _Contacts2 = _interopRequireDefault(_Contacts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.hashHistory },
    _react2.default.createElement(
        _reactRouter.Route,
        { path: '/', component: _App2.default },
        _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/repos/:name', component: _Repos2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _About2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/user', component: _User2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/contacts', component: _Contacts2.default })
    )
), document.getElementById('app'));
//# sourceMappingURL=index.js.map