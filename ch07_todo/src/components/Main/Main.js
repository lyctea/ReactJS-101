import React from 'react';
import ReactDOM from 'react-dom';
import TodoHeaderContainer from '../../containers/TodoHeaderContainer';
import TodoListContainer from '../../containers/TodoListContainer';


//Main 是无状态组件
const Main = () => (
    <div>
        <TodoHeaderContainer/>
        <TodoListContainer/>
    </div>
);

export default Main;