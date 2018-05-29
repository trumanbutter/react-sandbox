import React, { Component } from 'react';

class Userform extends Component {

    constructor(props) {
        super(props);    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange = event => {
        this.props.onInputChange(event.target.value);
      }
    
      handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Name:
                    <input type="text" value={this.props.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
      }
}


export default Userform;
