import React from 'react';
import SubmitButton from './submitButton'

import Graph from './lineChart'


const Form = React.createClass({
  render() {
    return(
      <div>
        
        <SubmitButton fetch={this.props.fetchSentiment}></SubmitButton>
        <Graph></Graph>
      </div>
    )
  }
});

export default Form;