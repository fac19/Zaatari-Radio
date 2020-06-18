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

	getSpecificFeedback: async (id) => {
		const data = await fetchData('GET', `feedback-workshop/?id=${id}`);
		return data;
	},
	getSpecificAuthor: async (id) => {
		const data = await fetchData('GET', `authors-workshop/?id=${id}`);
		return data;
	},
	submitFeedback: async (id, feedback) => {
		const data = await fetchData('POST', `submit-feedback/?id=${id}`, feedback);
		return data;
	},
};

export default api;
