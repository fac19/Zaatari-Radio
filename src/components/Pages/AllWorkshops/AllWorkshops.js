import React from 'react';
import * as SC from './style';
import { Title1, BGYellow } from '../../../styles/componentsStyles';
import api from '../../../api/api';
import WorkshopCard from '../../WorkshopCard/WorkshopCard';

export default function AllWorkshops() {
	const [allWorkshopData, setAllWorkshopData] = React.useState(null);
	const [error, setError] = React.useState('');

	React.useEffect(() => {
		api
			.getWorkshops()
			.then((result) => {
				setAllWorkshopData(result.records);
			})
			.catch(() => {
				setError('There was a problem getting your data');
			});
	}, []);

	function createWorkshopList() {
		return allWorkshopData.map((data) => {
			return <WorkshopCard data={data} />;
		});
	}

	return (
		<>
			<BGYellow>
				{error || ''}
				<Title1>Workshops</Title1>
			</BGYellow>
			<SC.Main>{allWorkshopData ? createWorkshopList() : <h1>Loading...</h1>}</SC.Main>
		</>
	);
}
