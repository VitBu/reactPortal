

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '../App';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

  


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});


describe('starting position', () => {
    it('show rectanlge with click', () => {
        const { getByText } = render(<App />);
        expect(getByText(/click/i)).toHaveClass('rectangle');
    });
});
    



