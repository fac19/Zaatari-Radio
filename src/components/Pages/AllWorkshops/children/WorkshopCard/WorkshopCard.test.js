import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import WorkshopCard from './WorkshopCard';

const data = {
	id: 'reclXZv3JtH77KpzW',
	fields: {
		carousel_pictures: [
			{
				url: 'https://dl.airtable.com/.attachments/75768831999f01ca14c3f6930ce8bbb6/2be86799/WS1.PNG',
			},
		],
		duration: 4,
		feedback: ['recvoGLUVrUrhDQ4o', 'recADAnl5iZEOu9bI'],
		average_rating: 4,
		title: 'Workshop Number 1',
	},
};

test('Renders workshop title on card', () => {
	render(
		<Router>
			<WorkshopCard data={data} />
		</Router>,
	);
	screen.getByText('Workshop Number 1');
});

test('Renders workshop duration and "hrs" on card', () => {
	render(
		<Router>
			<WorkshopCard data={data} />
		</Router>,
	);
	screen.getByText('Duration: 4hrs');
});

test('Counts feedback in array and renders correct number', () => {
	render(
		<Router>
			<WorkshopCard data={data} />
		</Router>,
	);
	screen.getByText('Feedback: 2');
});
