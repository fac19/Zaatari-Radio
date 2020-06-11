import React from 'react';
import { Title1, BGYellow } from '../../../styles/componentsStyles';
import api from '../../../api/api';

export default function AllWorkshops() {
	const [error, setError] = React.useState('');
	React.useEffect(() => {
		api
			.getWorkshops()
			.then((result) => {
				console.log('AllWorkshops -> result', result);

				return result;
			})
			.catch((err) => {
				setError(err.details);
			});
	}, []);

	return (
		<>
			<BGYellow>
				{error || ''}
				<Title1>Workshops</Title1>
			</BGYellow>
		</>
	);
}
