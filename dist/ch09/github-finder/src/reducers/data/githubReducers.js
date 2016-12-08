'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reduxActions = require('redux-actions');

var _models = require('../../constants/models');

var _actionTypes = require('../../constants/actionTypes');

var githubReducers = (0, _reduxActions.handleActions)({
    GET_GITHUB_SUCCESS: function GET_GITHUB_SUCCESS(state, _ref) {
        var payload = _ref.payload;
        return state.merge({
            data: payload.data
        });
    },
    CHAGE_USER_ID: function CHAGE_USER_ID(state, _ref2) {
        var payload = _ref2.payload;
        return state.merge({
            'userId': payload.userId
        });
    }
}, _models.GithubState);

exports.default = githubReducers;
//# sourceMappingURL=githubReducers.js.map