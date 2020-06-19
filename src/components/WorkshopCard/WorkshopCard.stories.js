import React from 'react';
import WorkshopCard from './WorkshopCard';
import * as SC from '../Pages/AllWorkshops/style';

export default {
	component: WorkshopCard,
	title: 'WorkshopCard',
};

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

export const StandardCard = () => {
	return (
		<SC.Main>
			<WorkshopCard data={data} />
		</SC.Main>
	);
};

export const OversizedImageCard = () => {
	return (
		<SC.Main>
			<WorkshopCard data={data} />
		</SC.Main>
	);
};
