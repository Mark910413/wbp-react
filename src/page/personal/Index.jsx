import React from 'react';
import { render } from 'react-dom';
import './style.less';

class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div className="img-list">React practice Personal Page</div>
    );
  }
}

export default Widget;