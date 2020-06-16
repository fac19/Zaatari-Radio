import React from 'react';
import TitleBar from './TitleBar';
import WorkshopHeader from './WorkshopHeader';

export default { title: 'Workshop Header' };

export const titleBar = () => <TitleBar title="hello" />;

export const workshopHeaderFewTags = () => {
	return (
		<WorkshopHeader
			images={[{ url: 'https://dl.airtable.com/.attachments/75768831999f01ca14c3f6930ce8bbb6/2be86799/WS1.PNG' }]}
			date="01/01/2044"
			tags={['tag1', 'tag2', 'the quick brown fox jumped over the lazy hen']}
			title="Hello world"
		/>
	);
};

export const workshopHeaderManyTags = () => {
	return (
		<WorkshopHeader
			images={[{ url: 'https://dl.airtable.com/.attachments/75768831999f01ca14c3f6930ce8bbb6/2be86799/WS1.PNG' }]}
			date="01/01/2044"
			tags={[
				'tag1',
				'tag2',
				'the quick brown fox jumped over the lazy hen',
				'the quick brown fox jumped over the lazy hen',
				'the quick brown fox jumped over the lazy hen',
				'the quick brown fox jumped over the lazy hen',
				'the quick brown fox jumped over the lazy hen',
				'the quick brown fox jumped over the lazy hen',
				'the quick brown fox jumped over the lazy hen',
				'the quick brown fox jumped over the lazy hen',
			]}
			title="Hello world"
		/>
	);
};

export const workshopHeaderNoImage = () => {
	return <WorkshopHeader date="01/01/2044" tags={['tag1', 'tag2', 'tag3']} title="Hello world" />;
};

export const workshopHeaderNoProps = () => {
	return <WorkshopHeader />;
};
