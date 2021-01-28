/*
 * @Author: your name
 * @Date: 2021-01-22 16:49:14
 * @LastEditTime: 2021-01-28 17:13:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wpk-react\src\store\reducer\index.js
 */

import { combineReducers } from 'redux';
import { 
  VisibilityFilters,
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  INCREASE,
  DECREASE,
  RECIVEDATA,
  STARTGETDATA,
} from '../action/index.js'

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ],
  counter: 0,
};

const { SHOW_ALL } = VisibilityFilters

// 将一部分逻辑 拆分出来
function todo (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        }
      ];
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed,
            });
          }
          return todo;
        })
      });
    default:
      return state;  
  }
}
// 将setVisibilty 逻辑拆分
function visibilityFilter(state = SHOW_ALL, action) {
  switch(action.type){
    case  SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;  
  }
}

function counter(state = 0, action) {
  switch(action.type) {
    case INCREASE:
      return ++ state;
    case DECREASE:
      return -- state;
    default:
      return state;    
  }
}
// 获取服务端的数据
function serviceData(state='Await data from Sevice...', action) {
  if (action.type === RECIVEDATA) {
    return  action.data;
  } else if (action.type === STARTGETDATA) {
    return action.data;
  }
  return state;
}
// redux 提供了  combineReducers 这个函数就是上面的简写（？）
const todoApp = combineReducers({
  visibilityFilter,
  todo,
  counter,
  serviceData
});

export default todoApp;

