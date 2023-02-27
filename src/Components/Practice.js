import React, {Component} from 'react';

class Practice extends Component {
    constructor() {
        super() 
        this.state = {
            Practice: 'Why are you clicking this button specify your intention please:'
        }
    }
    convertMessage() {
        this.setState({
            Practice: 'Permission has been granted for you to access this site Welcome with open hands:'
        })
    }
    render() {
        return (
            <div>
        <h1>{this.state.Practice}</h1>
        <button onClick={() => this.convertMessage()}>Comfirmation</button>
        </div>
        );
    };
};

export default Practice;