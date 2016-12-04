'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AppDispatcher = require('../dispatcher/AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _actionTypes = require('../constants/actionTypes');

var _events = require('events');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const CHANGE_EVENT = 'change'
var store = {
    todos: [],
    editing: false
};

var TodoStoreClass = function (_EventEmitter) {
    _inherits(TodoStoreClass, _EventEmitter);

    function TodoStoreClass() {
        _classCallCheck(this, TodoStoreClass);

        return _possibleConstructorReturn(this, (TodoStoreClass.__proto__ || Object.getPrototypeOf(TodoStoreClass)).apply(this, arguments));
    }

    _createClass(TodoStoreClass, [{
        key: 'addChangeListener',
        value: function addChangeListener(callback) {
            this.on(_actionTypes.ADD_TODO, callback);
        }
    }, {
        key: 'removeChangeListener',
        value: function removeChangeListener(callback) {
            this.removeListener(_actionTypes.ADD_TODO, callback);
        }
    }, {
        key: 'getTodos',
        value: function getTodos() {
            return store.todos;
        }
    }]);

    return TodoStoreClass;
}(_events.EventEmitter);

var TodoStore = new TodoStoreClass();

AppDispatcher.register(function (action) {
    switch (action.type) {
        case _actionTypes.ADD_TODO:
            store.todos.push(action.payload.text);
            TodoStore.emit(_actionTypes.ADD_TODO);
            break;
        default:
            return true;
    }
    return true;
});

exports.default = TodoStore;
//# sourceMappingURL=TodoStore.js.map