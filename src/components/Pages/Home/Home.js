import React from 'react';
import { Title1, BGYellow } from '../../../styles/componentsStyles';
import Tag from '../../tag';

export default function Home() {
	const [currentTags, setCurrentTags] = React.useState([]);
	console.log('Home -> currentTags', currentTags);

	return (
		<>
			<BGYellow>
				<Tag innerText="hello" currentTags={currentTags} setCurrentTags={setCurrentTags} />
				<Title1>Home</Title1>
			</BGYellow>
		</>
	);
}
