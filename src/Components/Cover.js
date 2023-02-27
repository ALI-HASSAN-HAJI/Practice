import React, {Component} from 'react';

class Cover extends Component {
    constructor() {
        super()
        this.state = {
            decrement: 100
        }
    }
    decrement() {
        this.setState({
           decrement: this.state.decrement - 1
        })
        console.log(this.state.decrement);
    
    }
    render() {
        return (
            <div>
        <h1>Decrement - {this.state.decrement}</h1>
        <button onClick={()=> this.decrement()}>Decrement:</button>
        </div>
        )
    };
};

export default Cover;