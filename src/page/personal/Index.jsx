import React from 'react';
import { render } from 'react-dom';
import './style.less';
import store from '@store/index.js';

import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from '@store/action/index.js';

console.log(store.getState());

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);
console.log(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about actions'))
// store.dispatch(addTodo('Learn about reducers'))
// store.dispatch(addTodo('Learn about store'))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// 停止监听 state 更新
unsubscribe();





class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: '',
    }
  }
  componentWillUnmount() {
  }
  render() {
    const {val = ''} = this.state;
    const todo = store.getState().todo;
    console.log(todo);
    return (
      <div>
        <div>
          <input type="text" value={val} onChange={(e) => { this.setState({val: e.target.value}); }} />
          <button onClick={() => { store.dispatch(addTodo(val)); this.setState({val: ''}) }}>add todo</button>
        </div>
        <ul>
          {
            todo.map((item, index) => {
              return (<li key={index}>{item.text}</li>);
            })
          }
        </ul>
      </div>
    );
  }
}

export default Widget;