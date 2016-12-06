import React from 'react';
import ReactDOM from 'react-dom';
//从react-redux中引入react-redux
import { Provider } from 'react-redux';

//引入main组件,其中div包裹了todoheader和todolist
import Main from './components/Main';
//引入输出存贮对象
import store from './store';

//Main是Stateless组件, 负责所有View的进入点
ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('app')
);