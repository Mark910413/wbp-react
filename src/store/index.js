/*
 * @Author: your name
 * @Date: 2021-01-22 11:00:11
 * @LastEditTime: 2021-01-28 17:18:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wpk-react\src\store\index.js
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware  from 'redux-thunk'
import reducer from './reducer/index.js';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunkMiddleware),
  // other store enhancers if any
);
let store = createStore(reducer, enhancer);

export default store;