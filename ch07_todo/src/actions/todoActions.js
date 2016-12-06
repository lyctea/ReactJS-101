//引入redux-action方便使用standard Action格式的action
import { createAction } from 'redux-actions';
import {
    CREATE_TODO,        //引入事件类型常量(字符串)
    DELETE_TODO,
    CHANGE_TEXT,
} from '../constants/actionTypes';
export const createTodo = createAction('CREATE_TODO');
export const deleteTodo = createAction('DELETE_TODO');
export const changeText = createAction('CHANGE_TEXT');

//使用了 redux-actions，它可以方便我们使用 Flux Standard Action 格式的 action
