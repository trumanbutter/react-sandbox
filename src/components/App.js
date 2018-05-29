import React, { Component } from 'react';
import Header from './Header';
import Userform from './Userform'
import '../App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {value: ''}
    }
    
    handleInputChange(value){
        this.setState({value: value});
    }

    render() {
        return (
        <div className="App">
            <Header />
            <Userform 
                onInputChange={this.handleInputChange}
            />
            <p className="App-intro">
            {this.state.value}
            </p>
        </div>
        );
    }
}

export default App;
