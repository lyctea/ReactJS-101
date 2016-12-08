'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _GithubBox = require('../../components/GithubBox');

var _GithubBox2 = _interopRequireDefault(_GithubBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResultPage = function ResultPage(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_GithubBox2.default, { data: props.data, userId: props.location.query.userId })
    );
};

exports.default = ResultPage;
//# sourceMappingURL=ResultPage.js.map