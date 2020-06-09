import fetchData from './fetchData';

require('jest-fetch-mock').enableMocks();

describe('testing fetchData', () => {
	beforeEach(() => {
		fetch.resetMocks();
	});

	it('Can make a mocked query to the database', () => {
		fetch.mockResponseOnce(JSON.stringify({ data: 5 }));

		fetchData('GET', 'all-workshops').then((res) => {
			expect(res.data).toBe(5);
		});
		expect(fetch.mock.calls.length).toEqual(1);
		expect(fetch.mock.calls[0][0]).toBe('.netlify/functions/all-workshops');
	});
});
