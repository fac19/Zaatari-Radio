import React from 'react';
import { screen, render } from '@testing-library/react';
// import { toHaveStyle, } from '@testing-library/jest-dom';
import WorkshopHeader from './WorkshopHeader';

test('Title bar text renders on page', () => {
	render(<WorkshopHeader title="Workshop 1" />);
	screen.getByText('Workshop 1');
});

// when you don't pass in titlebar, it displays "WORKSHOP"

test('Single tag and date renders in WorkshopHeader', () => {
	render(<WorkshopHeader date="12/08/2049" tags={['Tag1']} />);
	screen.getByText('Tag1');
	screen.getByText('12/08/2049');
});

test('Multiple tags and date renders in WorkshopHeader', () => {
	render(<WorkshopHeader date="12/08/2049" tags={['Tag1', 'Tag2', 'Tag3']} />);
	screen.getByText('Tag1');
	screen.getByText('Tag2');
	screen.getByText('Tag3');
	screen.getByText('12/08/2049');
});

test('Default title renders when not passing in title prop', () => {
	render(<WorkshopHeader />);
	screen.getByText('Workshop');
});

// test('Background image renders', () => {
// 	const image = 'https://dl.airtable.com/.attachments/75768831999f01ca14c3f6930ce8bbb6/2be86799/WS1.PNG';
// 	render(<WorkshopHeader images={[{ url: image }]} />);
// 	const background = screen.getByRole('img');
// 	expect(background).toHaveStyle();
// });

test('If not img prop the default background colour is applied', () => {});

// renders correcty when passed all props

// renders the number of tags passed in

// renders no date or tag when they are not passed in

// renders no image when no image is passed in.
