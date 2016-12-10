'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _Main = require('./components/Main');

var _Main2 = _interopRequireDefault(_Main);

var _HomePageContainer = require('./containers/HomePageContainer');

var _HomePageContainer2 = _interopRequireDefault(_HomePageContainer);

var _ResultPageContainer = require('./containers/ResultPageContainer');

var _ResultPageContainer2 = _interopRequireDefault(_ResultPageContainer);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 引入react-tap-event-plugin 避免material-ui onTouchTap event出现问题
//
(0, _reactTapEventPlugin2.default)();
//用react-redux的provider包起来讲store传递下去,让每个components都可以存取到state
//使用browserHistory当做history,并使用material-ui的MuiThemeProvider包裹整个components
//Main为母模板,其中有两个组件HomePageContainer  ResultPageContainer
_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _store2.default },
  _react2.default.createElement(
    _MuiThemeProvider2.default,
    null,
    _react2.default.createElement(
      _reactRouter.Router,
      { history: _reactRouter.browserHistory },
      _react2.default.createElement(
        _reactRouter.Route,
        { path: '/', component: _Main2.default },
        _react2.default.createElement(_reactRouter.IndexRoute, { component: _HomePageContainer2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/result', component: _ResultPageContainer2.default })
      )
    )
  )
), document.getElementById('app'));
//# sourceMappingURL=index.js.map