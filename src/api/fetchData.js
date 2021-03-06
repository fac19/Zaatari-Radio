import url from './netlify-url';

const decodeJSON = (res) => {
	return res.json();
};

// const debug = (res) => {
//   console.log(typeof res);
//   console.log(res);
//   return res;
// };

/* If the API returns an error the decoded object will contain a .error and .code property. If we see these we turn them into a real error and throw it so the caller can catch it and take steps to notify the user. */
const throwIfError = (res) => {
	if (res.error) {
		const err = new Error(res.error);
		err.status = res.code;
		err.details = res;
		throw err;
	}
	return res;
};

const fetchData = (method, endpoint, body) => {
	const headers = { 'content-type': 'application/JSON' };

	const fetchObj = {
		method,
		mode: 'cors',
		headers,
	};

	if (body) fetchObj.body = JSON.stringify(body);

	return (
		fetch(url + endpoint, fetchObj)
			// .then(debug)
			.then(decodeJSON)
			// .then(debug)
			.then(throwIfError)
	);
	// .then(debug);
};

export default fetchData;
