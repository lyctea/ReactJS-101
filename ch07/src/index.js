import React from 'react';
import ReactDOM from 'react-dom';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';

//App 组件返回的TodoHeader和TodoList组件
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};  //初始状态置空
    }
    render() {
        return (
            <div>
                <TodoHeader />
                <TodoList />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
