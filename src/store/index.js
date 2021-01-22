/*
 * @Author: your name
 * @Date: 2021-01-22 11:00:11
 * @LastEditTime: 2021-01-22 11:36:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wpk-react\src\store\index.js
 */

 import { createStore } from 'redux';

 function counter(state = 0, action) {
    switch(action.type) {
        case 'INCREMENT':
            return state += 1;
        case 'DECREMENT':
            return state -= 1;
        default:
            return state;        
    }
 }

 let store = createStore(counter);

//  store.subscribe(() => {
//     console.log(store.getState());
//  });


//  store.dispatch({ type: 'INCREMENT' });

 export default store;