import { combineReducers } from 'redux-immutable';
import ui from './ui/uiReducers';// import routes from './routes';
import github from './data/githubReducers';// import routes from './routes';

const rootReducer = combineReducers({
  ui,
  github,
});

export default rootReducer;
//将 reduces 使用 redux-immutable 的 combineReducers 在一起