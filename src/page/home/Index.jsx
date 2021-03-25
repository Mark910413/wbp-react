import React from 'react';
import Store from '@store/index';
import { increaseCounter, decreaseCounter } from '@store/action/index.js'
import './style.less';

class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount = () => {}
  componentWillUnmount() {
  }
  render() {
    return (
      <div className="img-list">
        <span>{Store.getState().counter}</span>
        <div>
          <button onClick={() => Store.dispatch(increaseCounter())}>INCREMENT</button>
          <button onClick={() => Store.dispatch(decreaseCounter())}>DECREMTNT</button>
        </div>
      </div>
    );
  }
}

export default Widget;