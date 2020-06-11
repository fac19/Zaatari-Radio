// example test that comes with create-react-app:
import React from 'react';
import { screen, render } from '@testing-library/react';
import Nav from './Nav';
import App from '../App';

test('Renders Contact link in nav bar', () => {
	render(
		<App>
			<Nav />
		</App>,
	);
	screen.getByText('Contact');
});

test('Renders Home link in nav bar', () => {
	render(
		<App>
			<Nav />
		</App>,
	);
	screen.getAllByText('Home');
});

test('Renders workshops link in nav bar', () => {
	render(
		<App>
			<Nav />
		</App>,
	);
	screen.getAllByText('View Workshops');
});
