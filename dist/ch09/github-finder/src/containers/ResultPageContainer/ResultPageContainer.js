'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _ResultPage = require('../../components/ResultPage');

var _ResultPage2 = _interopRequireDefault(_ResultPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(function (state) {
    return {
        data: state.getIn(['github', 'data'])
    };
}, function (dispatch) {
    return {};
})(_ResultPage2.default);
//# sourceMappingURL=ResultPageContainer.js.map