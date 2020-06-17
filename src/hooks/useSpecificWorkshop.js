import React, { useEffect } from 'react';
import api from '../api/api';
import getFromJSON from '../utils/getFromJSON';

export default function useSpecificWorkshop(id, setWorkshop, setErrorState) {
	console.log('hooky');
	useEffect(() => {
		api
			.getSpecificWorkshop(id)
			.then((res) => {
				setWorkshop(getFromJSON(res));
			})
			.catch(() => {
				setErrorState(
					<h2>
						<br />
						<br />
						This workshop couldnt be found
					</h2>,
				);
			});
	}, [id, setWorkshop, setErrorState]);
}
