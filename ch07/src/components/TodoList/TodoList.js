//当store(数据)发生改变时,通过设置的监听器. List组件更新

import React, { Component } from 'react';
import TodoStore from '../../stores/TodoStore';

function getAppState() {
    return {
        todos: TodoStore.getTodos(),
    };
}
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            todos: [],          //默认状态是一个空数组
        };
    }
    componentDidMount() {   //当组件已经加载
        TodoStore.addChangeListener(this.onChange); //讲onChange事件添加到将事件添加到EventEmitter中
    }
    onChange() {
        this.setState(getAppState());
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        //遍历todos数组中的每一项, todo是值 key是下标
                        this.state.todos.map((todo, key) => (
                            //每一项都返回一个li <li key="1">addtodo</li>
                            <li key={key}>{todo}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList;
