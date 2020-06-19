import React from 'react';
import { screen, render } from '@testing-library/react';
import BackButton from './BackButton';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

test('BackButton contains the text "BACK"', () => {
	// !(screen.getByText("Back"))
	render(<BackButton to="nowhere" />);
	screen.getAllByText('Back');
});

test('PrimaryButton contains text passed in as a prop without modifying it', () => {
	render(<PrimaryButton to="nowhere" innerText="Lorem ipsum" />);
	screen.getAllByText('Lorem ipsum');
});

test('SecondaryButton contains text passed in as a prop without modifying it', () => {
	render(<SecondaryButton to="nowhere" innerText="hello" />);
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
