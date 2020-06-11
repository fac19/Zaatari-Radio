import React from 'react';
import { Title1, BGYellow } from '../../../styles/componentsStyles';
import api from '../../../api/api';

export default function AllWorkshops() {
	const [allWorkshopData, setAllWorkshopData] = React.useState(null);
	const [error, setError] = React.useState('');
	React.useEffect(() => {
		api
			.getWorkshops()
			.then((result) => {
				// console.log(result)
				// console.log("title", result.records[0].fields.title)
				setAllWorkshopData(result.records);
			})
			.catch((err) => {
				setError(err.details);
			});
	}, []);

	function createWorkshopList() {
		// console.log("createWorkshopList -> allWorkshopData", allWorkshopData)
		const data = allWorkshopData[0];
		return <h1>{data.fields.title}</h1>;
	}

	return (
		<>
			<BGYellow>
				{error || ''}
				<Title1>Workshops</Title1>
				{/* {allWorkshopData ? createWorkshopList() : (<h1>Loading...</h1>) } */}
			</BGYellow>
			<BGYellow>{allWorkshopData ? createWorkshopList() : <h1>Loading...</h1>}</BGYellow>
		</>
	);
}
