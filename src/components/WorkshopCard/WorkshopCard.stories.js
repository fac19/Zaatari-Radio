import React from 'react';
import WorkshopCard from './WorkshopCard';
import * as SC from '../Pages/AllWorkshops/style';

export default {
	component: WorkshopCard,
	title: 'WorkshopCard',
};

export const StandardCard = () => {
	const data = {
		id: 'reclXZv3JtH77KpzW',
		fields: {
			carousel_pictures: [
				{
					url: 'https://dl.airtable.com/.attachments/75768831999f01ca14c3f6930ce8bbb6/2be86799/WS1.PNG',
				},
			],
			duration: '4',
			feedback: ['recvoGLUVrUrhDQ4o', 'recADAnl5iZEOu9bI'],
			average_rating: 4,
			title: 'Storybook Workshop',
		},
	};

	return (
		<SC.Main>
			<WorkshopCard data={data} />
		</SC.Main>
	);
};

export const noPropsCard = () => {
	return (
		<SC.Main>
			<WorkshopCard />
		</SC.Main>
	);
};

export const noIdCard = () => {
	const data = {
		id: undefined,
		fields: {
			carousel_pictures: [
				{
					url: 'https://dl.airtable.com/.attachments/75768831999f01ca14c3f6930ce8bbb6/2be86799/WS1.PNG',
				},
			],
			duration: '4',
			feedback: ['recvoGLUVrUrhDQ4o', 'recADAnl5iZEOu9bI'],
			average_rating: 4,
			title: 'Storybook Workshop',
		},
	};

	return (
		<SC.Main>
			<WorkshopCard data={data} />
		</SC.Main>
	);
};

export const OversizedImageCard = () => {
	const data = {
		id: undefined,
		fields: {
			carousel_pictures: [
				{
					url: 'https://picsum.photos/id/237/1400/600',
				},
			],
			duration: '4',
			feedback: ['recvoGLUVrUrhDQ4o', 'recADAnl5iZEOu9bI'],
			average_rating: 4,
			title: 'Storybook Workshop',
		},
	};

	return (
		<SC.Main>
			<WorkshopCard data={data} />
		</SC.Main>
	);
};

export const UndefinedImageCard = () => {
	const data = {
		id: undefined,
		fields: {
			carousel_pictures: [
				{
					url: undefined,
				},
			],
			duration: '4',
			feedback: ['recvoGLUVrUrhDQ4o', 'recADAnl5iZEOu9bI'],
			average_rating: 4,
			title: 'Storybook Workshop',
		},
	};

	return (
		<SC.Main>
			<WorkshopCard data={data} />
		</SC.Main>
	);
};
