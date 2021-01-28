import React from 'react';
import { connect } from 'react-redux';

import './style.less';
import {
  addTodo
} from '@store/action/index.js';

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
    const { todo = [], dispatch } = this.props;
    console.log(todo);
    return (
      <div>
        <div>
          <input type="text" value={val} onChange={(e) => { this.setState({val: e.target.value}); }} />
          <button onClick={() => { dispatch(addTodo(val)); this.setState({val: ''}) }}>add todo</button>
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

export default connect(({ todo }) => {
  return {todo};
})(Widget);