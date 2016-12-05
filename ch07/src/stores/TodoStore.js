import AppDispatcher from '../dispatcher/AppDispatcher';  //事件调度中心
import { ADD_TODO } from '../constants/actionTypes';  //事件常量
//events 模块只提供了一个对象： events.EventEmitter。
// EventEmitter(事件分发) 的核心就是事件触发与事件监听器功能的封装。
import { EventEmitter } from 'events';

// const CHANGE_EVENT = 'change';

//数据对象
const store = {
    todos: [],
    editing: false,  //可编辑标识符
};

class TodoStoreClass extends EventEmitter {

    addChangeListener(callback) {       //添加事件监听
        this.on(ADD_TODO, callback);    //将事件添加到EventEmitter中,事件类型为ADD_TODO
    }

    removeChangeListener(callback) {
        this.removeListener(ADD_TODO, callback);  //将事件移除到EventEmitter中
    }

    getTodos() {
        return store.todos;     //得到数据对象数组
    }
}

//单例?
const TodoStore = new TodoStoreClass();

//事件调度中心注册一个函数
AppDispatcher.register((action) => {
    switch (action.type) {
        case ADD_TODO:      //如果注册的函数是ADD_TODO
            store.todos.push(action.payload.text);  //讲来到的数据压栈进数组
            TodoStore.emit(ADD_TODO);   //emit??
            break;
        default:
            return true;
    }
    return true;
});

export default TodoStore;
