'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TodoActions = undefined;

var _AppDispatcher = require('../dispatcher/AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _actionTypes = require('../constants/actionTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodoActions = exports.TodoActions = {
    addTodo: function addTodo(text) {
        _AppDispatcher2.default.handleAction({
            type: _actionTypes.ADD_TODO,
            payload: {
                text: text
            }
        });
    }
};
//# sourceMappingURL=todoActions.js.map