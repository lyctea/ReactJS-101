import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import Immutebale from 'immutable';
import rootReducer from '../reducers';

const initialState = Immutebale.Map();

export default createStore(
    rootReducer,
    initialState,
    applyMiddleware(createLogger({
        stateTransformer: state => state.toJS()
    }))
);