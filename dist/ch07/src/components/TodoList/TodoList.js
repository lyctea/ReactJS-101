'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TodoStore = require('../../stores/TodoStore');

var _TodoStore2 = _interopRequireDefault(_TodoStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAppState() {
    return {
        todos: _TodoStore2.default.getTodos()
    };
}
//# sourceMappingURL=TodoList.js.map