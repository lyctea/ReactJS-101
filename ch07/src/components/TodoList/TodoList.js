import React, { Component } from 'react';
import TOdoStore from '../../stores/TodoStore';

function getAppState() {
    return {
        todos: TOdoStore.getTodos(),
    };
}

class TodoList extends  Component {
    constructor(props){
        this.onChange = this.onChange.bind(this);
        this.state = {
            todos: [],
        };
    }
    componentDidMount(){
        TOdoStore.addChangeListener(this.onChange);
    }
    onChange(){
        this.setState(getAppState());
    }
    render(){
        return(
            <div>
                <ul>{this.state.todos.map((todo, key) => (
                    <li key={key}>{todo}</li>
                ))}</ul>
            </div>
        );
    }
}

export default TodoList;