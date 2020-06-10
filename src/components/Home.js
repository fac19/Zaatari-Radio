import React from 'react';
import { Title1, BGYellow } from '../styles/componentsStyles';
import BackButton from './buttons/Back';
import OceanButton from './buttons/Ocean';
import OliveButton from './buttons/Olive';

export default function Home() {
	return (
		<>
			<BGYellow>
				<BackButton to="/workshops" />
				<OceanButton to="/workshops" innerText="Submit" />
				<OliveButton to="/workshops" innerText="Something" />
				<Title1>Home</Title1>
			</BGYellow>
		</>
	);
}
