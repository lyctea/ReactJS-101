'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Repos = function Repos(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h3',
            null,
            'Repos'
        ),
        _react2.default.createElement(
            'h5',
            null,
            props.params.name
        )
    );
};

Repos.propTypes = {
    params: _react2.default.PropTypes.Object
};

exports.default = Repos;
//# sourceMappingURL=Repos.js.map