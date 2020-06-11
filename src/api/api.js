import fetchData from './fetchData';

const api = {
	getWorkshops: async () => {
		const data = await fetchData('GET', 'all-workshops');
		return data;
	},

	getSpecificWorkshop: async () => {
		const data = await fetchData('GET', 'specific-workshop');
		return data;
	},
};

export default api;
