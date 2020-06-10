import React from 'react';
import { screen, render } from '@testing-library/react';
import BackButton from './Back';
import OceanButton from './Ocean';
import OliveButton from './Olive';

test('BackButton contains the text "BACK"', () => {
	// !(screen.getByText("Back"))
	render(<BackButton to="nowhere" />);
	screen.getAllByText('BACK');
});

test('OceanButton contains text passed in as a prop without modifying it', () => {
	render(<OceanButton to="nowhere" innerText="Lorem ipsum" />);
	screen.getAllByText('Lorem ipsum');
});

test('OliveButton contains text passed in as a prop without modifying it', () => {
	render(<OliveButton to="nowhere" innerText="hello" />);
	screen.getAllByText('hello');
});

// test('Back button redirects', () => {
// 	const history = createMemoryHistory()
// 	const firstLength = history.length
// 	console.log(firstLength)
// 	render(<BackButton to={"nowhere"}/>)
// 	const backButton = screen.getByText("BACK");
// 	fireEvent.click(backButton);
// 	const secondLength = history.length
// 	expect(secondLength).toBe(firstLength +1);

// })
