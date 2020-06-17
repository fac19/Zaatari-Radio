import React from 'react';
import * as SC from './style';
import { Title1 } from '../../../styles/componentsStyles';
import WorkshopCard from '../../WorkshopCard/WorkshopCard';
import api from '../../../api/api';

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
			<SC.AllWorkshopHeader>
				{error || ''}
				<Title1>All Workshops</Title1>
			</SC.AllWorkshopHeader>
			<SC.Main>{allWorkshopData ? createWorkshopList() : <h1>Loading...</h1>}</SC.Main>
		</>
	);
}
