// Todo app dispatcher with actions responding to both
// view and server actions

//从Fackbook提供的Dispatcher api中获得(dispatch(调度)、register(注册)
// 和 subscribe(订阅))的方法, 封装自己的DispatcherClass
import { Dispatcher } from 'flux';

class DispatcherClass extends Dispatcher {

    handleAction(action) {
        //this指向本类实例,
        this.dispatch({
            type: action.type,      //事件类型是action.type
            payload: action.payload, //事件数据是action.payload
        });
    }

}
//单例? 不可改变的调度中心
const AppDispatcher = new DispatcherClass();

export default AppDispatcher;
