import React, {Component} from 'react';

class EventBind extends Component {
    constructor(props) {
        super()
        this.state = {
            message: 'Hello'
        }
        // THIS ONE IS SUITABLE FOR THIRD APPROACH
        // this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler() {
        this.setState({
            message: 'GoodBye!!'
        })
    }
    // THIS ONE IS SUIABLE FOR FORTH APPROACH
    clickHandler = () => {
        this.setState({
            message: 'GoodBye!'
        })
    }
    render() {
        return(
            <div>
                <div>{this.state.message}</div>
          {/* <button onClick={this.clickHandler.bind(this)}>Click:</button> */}
          {/* <button onClick={() => this.clickHandler()}>Click:</button> */}
          <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind;
