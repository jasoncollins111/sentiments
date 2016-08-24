import React from 'react';

const SubmitButton = React.createClass({
  
  getDefaultProps(){
    return { type: "Submit"}
  },

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetch()
  },

  render() {    
    console.log('props', this.props)
    return (
      <div className="center">
        <button type="button" className="btn btn-primary btn-block submit-btn" 
          onClick={this.handleSubmit}>{this.props.type}</button>
      </div>
    )
  }
});

export default SubmitButton;