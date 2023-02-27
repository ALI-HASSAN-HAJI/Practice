import React, {Component} from 'react'

class PracticeBind extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Hi Ibrahim, how are you doing?:'
        }
        // this.clickHandler=this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Congratulation your really qualified for this position so welcome:'
    //     })
    // }
    clickHandler = () => {
        this.setState({
            message: 'Welcome to React Practice'
        })
    }
    render() {
        return(
            <div>
                <p>{this.state.message}</p>
                {/* This is the first Option */}
                {/* <button onClick  ={this.clickHandler.bind(this)}>Click it</button> */}
                {/* This is the second Option */}
                {/* <button onClick={() => this.clickHandler()}>Click it:</button> */}
                {/* This will be the third Option */}
                {/* <button onClick={this.clickHandler}>Click it::</button> */}
                {/* This is the forth and last Option */}
                <button onClick={this.clickHandler}>Click it</button>

            </div>
        )
    }
}

export default PracticeBind;