import React, { Component } from 'react';
import { TodoActions } from '../../actions/todoActions';

class TodoHeader extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.state = {
            text: '',
            editing: false,
        };
    }

    onChange(event) {
        this.setState({
            text: event.target.value,
        });
    }

    onAdd() {
        TodoActions.addTodo(this.state.text); //发出addTodo事件,并传递数据
        this.setState({         //把当前输入框置空
            text: '',
        });
    }

    render() {
        return (
            <div>
                <h1>TodoFlux</h1>
                <div>
                    <input
                        value={this.state.text}
                        type="text"
                        placeholder="請輸入代辦事項"
                        onChange={this.onChange}        //输出框改变时触发该事件
                    />
                    <button
                        onClick={this.onAdd}    //按钮点击时触发该事件
                    >
                        送出
                    </button>
                </div>
            </div>
        );
    }
}

export default TodoHeader;

