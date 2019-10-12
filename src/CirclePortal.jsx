import { Component } from 'react';
import ReactDOM from 'react-dom';

export class CirclePortal extends Component {
    render() {
        return ReactDOM.createPortal(this.props.children, document.getElementById('circle'));
    }
}
