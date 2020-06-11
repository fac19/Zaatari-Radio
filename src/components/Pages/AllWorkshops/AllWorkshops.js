import React from 'react';
import styled from 'styled-components';
import { Title1, BGYellow } from '../../../styles/componentsStyles';
import api from '../../../api/api';
import WorkshopCard from './WorkshopCard';

const StyledMain = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 4rem;
`;

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
			<StyledMain>{allWorkshopData ? createWorkshopList() : <h1>Loading...</h1>}</StyledMain>
		</>
	);
}
