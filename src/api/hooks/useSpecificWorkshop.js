import { useEffect } from 'react';
import api from '../api';
import getFromJSON from './getFromJSON';

export default function useSpecificWorkshop(id, setWorkshop, setErrorState) {
	useEffect(() => {
		api
			.getSpecificWorkshop(id)
			.then((res) => {
				setWorkshop(getFromJSON(res));
			})
			.catch(() => {
				setErrorState('Sorry the workshop could not be found. Please search again');
			});
	}, [id, setWorkshop, setErrorState]);
}
