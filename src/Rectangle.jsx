import React, { Component } from 'react'
import { CirclePortal } from './CirclePortal';
import { ValHolder } from './ValHolder';

export default class Rectangle extends Component {

    state = {
        clicked: false,
        value: ""
    }

    render() {
        return (
            <>
                <ValHolder  value={this.state.value}   handleClick={this.handleClick}/>
                <div onClick={() => this.setState({ clicked: true })} className="rectangle">click</div>
                {this.state.clicked && (
                    <CirclePortal>
                        <span id="target-text">Clicked</span>
                    </CirclePortal>
                )}
                
            </>
        );
    }

    handleClick = (e) => {
        this.setState({
            value: e.target.value
        });
    }
    
}


