import React from 'react';
import { connect } from 'react-redux'
import { getServiceData } from '@store/action/index';
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
    const {dispatch, serviceData='' } = this.props;
    console.log(!!serviceData);
    return (
      <div className="img-list">
        <p><span>{serviceData}</span></p>
        <button onClick={() => dispatch(getServiceData())}>getData</button>
      </div>
    );
  }
}

export default connect(({serviceData}) => {
  return { serviceData };
})(Widget);