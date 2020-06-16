// example test that comes with create-react-app:
import React from 'react';
import { screen, render } from '@testing-library/react';
import Tag from './Tag';

test('Renders text passed in as innerText', () => {
	render(<Tag innerText="golden unicorns defecate evenly" />);
	screen.getByText('golden unicorns defecate evenly');
});

test('clicking the tag calls setCurrentTags if CurrentTags includes innertext', () => {
	let counter = 0;
	const setCurrentTags = () => {
		counter += 1;
	};
	const tagText = 'hello world';
	render(<Tag innerText={tagText} currentTags={[tagText]} setCurrentTags={setCurrentTags} />);
	const tag = screen.getByText(tagText);
	tag.click();
	expect(counter).toBe(1);
});

test('clicking the tag does not call setCurrentTags if there is no currentTags', () => {
	let counter = 0;
	const setCurrentTags = () => {
		counter += 1;
	};
	const tagText = 'hello world';
	render(<Tag innerText={tagText} setCurrentTags={setCurrentTags} />);
	const tag = screen.getByText(tagText);
	tag.click();
	expect(counter).toBe(0);
});
