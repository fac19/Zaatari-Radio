import fetchData from './fetchData';

const api = {
	getWorkshops: async () => {
		const data = await fetchData('GET', 'all-workshops');
		return data;
	},

	getSpecificWorkshop: async (id) => {
		const data = await fetchData('GET', `specific-workshop/?id=${id}`);
		return data;
	},
};

export default api;
