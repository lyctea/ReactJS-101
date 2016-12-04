import React from 'react';
import ReactDOM from 'react-dom';
import ToDoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <div>
                <ToDoHeader />
                <TodoList />
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('app'));
