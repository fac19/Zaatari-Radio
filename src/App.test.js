// example test that comes with create-react-app:
import React from 'react';
import { screen, render } from '@testing-library/react';
import App from './App';

test('Renders Page', () => {
	render(<App />);
	screen.getByText('Hi');
});
