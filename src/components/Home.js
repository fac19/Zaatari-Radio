import React from 'react';
import { Title1, BGYellow } from '../styles/componentsStyles';
import BackButton from './buttons/back';

export default function Home() {
	return (
		<>
			<BGYellow>
				<BackButton to="/workshops" />
				<Title1>Home</Title1>
			</BGYellow>
		</>
	);
}
