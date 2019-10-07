import React, { Component } from 'react'
import ReactDOM from 'react-dom'
export default class Rectangle extends Component {

    state = {
        clicked: false
    }

    render() {
        return (
            <>
                <div onClick={() => this.setState({ clicked: true })} className="rectangle">click</div>
                {this.state.clicked && (
                    <Tt>
                        <span id="target-text">Clicked</span>
                    </Tt>
                )}
            </>
        );
    }
    
}

class Tt extends Component {
    render() {
        return ReactDOM.createPortal(this.props.children, document.getElementById('circle')); 
    }
}
