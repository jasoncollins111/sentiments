import React, { PropTypes } from 'react';

import { Link } from 'react-router';

const Main = React.createClass({
  propTypes: {
    update: PropTypes.func,
  },

  childContextTypes: {
    update: PropTypes.func,
  },

  getChildContext(){
    console.log('main', this.props)
    return {
      update: this.props.update,
    }
  },


  render() {

    return (
      <div>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
