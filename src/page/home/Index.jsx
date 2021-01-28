import React from 'react';
import { connect } from 'react-redux'
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
    const { dispatch, counter } = this.props;
    return (
      <div className="img-list">
        <span>{counter}</span>
        <div>
          <button onClick={() => dispatch(decreaseCounter()) }>INCREMENT</button>
          <button onClick={() => dispatch(increaseCounter()) }>DECREMTNT</button>
        </div>
      </div>
    );
  }
}

export default connect(({counter}) => {
  return { counter };
})(Widget);