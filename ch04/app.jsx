// Functional Component 可以视为 f(d) => UI，
// 根据传进去的 props 绘出对应的 UI。
// 注意这边 props 是传入函式的参数，因此取用 props 不用加 this
// const HelloMessage = (props) => (
//     <div>Hello {props.name}</div>
// );

class HelloMessage extends React.Component {
    // 若是需要绑定 this.方法或是需要在 constructor 使用 props，定义 state，就需要 constructor。若是在其他方法（如 render）使用 this.props 则不用一定要定义 constructor
    constructor(props) {
        // 对于 OOP 物件导向程式设计熟悉的读者应该对于 constructor 建构子的使用不陌生，事实上它是 ES6 的语法糖，骨子里还是 prototype based 物件导向程式语言。透过 extends 可以继承 React.Component 父类别。super 方法可以呼叫继承父类别的建构子
        super(props);
        this.state = {}
    }
    // render 是唯一必须的方法，但如果是单纯 render UI 建议使用 Functional Component 写法，效能较佳且较简洁
    render() {
        return (
            <div>Hello {this.props.name}</div>
        )
    }
}


// PropTypes 验证，若传入的 props type 不是 string 将会显示错误
HelloMessage.propTypes = {
    name: React.PropTypes.string,
}

// Prop 预设值，若对应 props 没传入值将会使用 default 值 Zuck。用法等于 ES5 的 getDefaultProps
HelloMessage.defaultProps = {
    name: 'Zuck',
}
ReactDOM.render(<HelloMessage name="Mark" />, document.getElementById('app'));