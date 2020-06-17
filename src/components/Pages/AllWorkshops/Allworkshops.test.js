// example test that comes with create-react-app:
import React from 'react';
import { screen, render } from '@testing-library/react';
import AllWorkshops from './AllWorkshops';

test('Renders Workshops Page', () => {
	render(<AllWorkshops />);
	screen.getByText('All Workshops');
});
