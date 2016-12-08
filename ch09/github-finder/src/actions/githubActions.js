import 'whatwg-fetch';
import {
    GET_GITHUB_INITIATE,
    GET_GITHUB_SUCCESS,
    GET_GITHUB_FAIL,
    CHAGE_USER_ID,
} from '../constants/actionTypes';

import {
    showSpinner,
    hideSpinner,
} from './uiActions';

export const getGithub = (userId = 'torvalds') => {
    return (dispatch) => {
        dispatch({ type: GET_GITHUB_INITIATE });    //派发一个action
        dispatch(showSpinner());    //action: SHOW_SPINNER


        //then方法是异步操作,就是当.then()前的方法执行完再执行
        //fetch发出AJAX请求,使用Promise,是一种简洁的API
        fetch('https://api.github.com/users/' + userId)
             //返回response.json
            .then(function(response) { return response.json() })
            //得到返回的json
            .then(function(json) {
                //派发一个请求成功事件,携带json数据
                dispatch({ type: GET_GITHUB_SUCCESS, payload: { data: json } });
                //派发hidespinner(隐藏下拉菜单)
                dispatch(hideSpinner());
            })
            //派发请求错误事件
            .catch(function(response) { dispatch({ type: GET_GITHUB_FAIL }) });
    }
}

//changeUserId  是一个函数,参数是text 返回值是花括号内的
export const changeUserId = (text) => ({ type: CHAGE_USER_ID, payload: { userId: text } });