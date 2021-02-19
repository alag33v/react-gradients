import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
    screen.debug();
    expect(screen.getByText('Gradients')).toBeInTheDocument();
  });
});
