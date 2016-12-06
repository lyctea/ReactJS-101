import { handleActions } from 'redux-actions';
import { TodoState } from '../../constants/models'; //引入初始State树
import {
    CREATE_TODO,
    DELETE_TODO,
    CHANGE_TEXT,
}from '../../constants/actionTypes';        //引入事件自定义名

/*redux-actions是一个简化action和reducer创建的一个封装库,里面有5个js文件
createAction.js   创建action
handleAction.js  操作action
handleActions.js       将所有的action集中统一处理
index.js    输出所有的函数
ownKeys.js  用于判断对象属性
*/

//使用handleActions代替传统是switch case 更简洁
const todoReducers = handleActions({
    //如果事件类型是CREATE_TODO, 往todos数组中追加todo对象
    CREATE_TODO: (state) => {
        let todos = state.get('todos').push(state.get('todo'));
        return state.set('todos',todos)
    },
    //如果事件类型是DELETE_TODO,
    DELETE_TODO: (state, { payload }) => (
        state.set('todos', state.get('todos').splice(payload.index, 1))
    ),
    CHANGE_TEXT: (state, { payload }) => (
        state.merge({'todo' : payload })
    )
}, TodoState);

export default todoReducers;