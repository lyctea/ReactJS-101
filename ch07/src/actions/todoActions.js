import AppDispatcher from '../dispatcher/AppDispatcher'; //获取单例的事件调度中心
import { ADD_TODO } from '../constants/actionTypes';  //获得事件常量

export const TodoActions = {
    addTodo(text) {
        AppDispatcher.handleAction({
            type: ADD_TODO,     //触发handleAction, 事件类型是ADD_TODO
            payload: {              //所携带的数据是text
                text,
            },
        });
    },
};
