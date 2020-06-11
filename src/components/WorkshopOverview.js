import React, { useEffect } from 'react';
import { Title1, BGYellow } from '../styles/componentsStyles';
import api from '../api/api';

export default function WorkshopOverview() {
	useEffect(() => {
		api
			.getSpecificWorkshop()
			.then((res) => {
				return res;
			})
			.catch((err) => {
				// Think we are setting state here with the err message
				return err;
			});
	}, []);

	return (
		<>
			<BGYellow>
				<Title1>Workshop Overview</Title1>
			</BGYellow>
		</>
	);
}
