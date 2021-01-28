/*
 * @Author: your name
 * @Date: 2021-01-22 16:39:48
 * @LastEditTime: 2021-01-28 17:11:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wpk-react\src\store\action\index.js
 */
/*
 * action 类型
 */
import { post } from '@src/utils/request';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";

export const GETSERVICEDATA = 'GETSERVICEDATA';
export const RECIVEDATA = 'RECIVEDATA';
export const STARTGETDATA = 'STARTGETDATA';
/*
 * 其它的常量
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action 创建函数
 */

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export function increaseCounter() {
  return { type: INCREASE }
}

export function decreaseCounter() {
  return { type: DECREASE }
}

export function reciveData (data) {
  return {
    type: RECIVEDATA,
    data,
  }
} 

export function startGetData () {
  return {
    type: STARTGETDATA,
    data: 'Start getting data from Service!'
  }
}
export function getServiceData() {
  return async (dispatch) => {
    dispatch(startGetData());
    const res = await post();
    return dispatch(reciveData(res.data));
  }
}
