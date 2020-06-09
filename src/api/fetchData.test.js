import fetchData from './fetchData';

const originalFetch = global.fetch;

// Fetch POST route, no auth needed - happy path
// Fetch POST route, no auth needed - happy path
// Fetch POST route, no auth needed - happy path
test('Fetch request to /login - happy path', () => {
	const body = {
		email: 'vatsal@iscool.com',
		password: 'password',
	};

	// Mock the response to our fetch request
	const fetchPayload = {
		token: 'qwertyuiop',
		expires: 1590216865, // need real time + offset
		user_id: 1,
		user_name: 'vatsal',
	};
	const mockFetchResponse = { json: () => fetchPayload };
	global.fetch = (p1, p2) => {
		// Check fetch called with right params
		expect(p1).toBeDefined();
		expect(p2).toBeDefined();
		expect(p2.mode).toBe('cors');
		expect(p2.headers).toBeDefined();
		expect(p2.headers['content-type']).toBeDefined();
		expect(p2.headers['content-type']).toBe('application/JSON');
		return Promise.resolve(mockFetchResponse);
	};

	fetchData('POST', '/login', { body, auth: false }).then((response) => {
		expect(response.token).toBeDefined();
		expect(response.user_name).toBeDefined();
		expect(response.user_id).toBeDefined();
		expect(response.expires).toBeDefined();
		expect(response.user_name).toBe('vatsal');
		expect(typeof response.user_id).toBe(typeof 1);
		expect(typeof response.expires).toBe(typeof 1);
	});
});

// Fetch POST route, bad params, should get error
// Fetch POST route, bad params, should get error
// Fetch POST route, bad params, should get error
test('Fetch request to /login - wrong password', () => {
	const body = {
		email: 'vatsal@iscool.com',
		password: 'pissword',
	};

	// Mock the response to our fetch request
	const fetchPayload = {
		error: 'Generic Error',
		code: 345,
	};
	const mockFetchResponse = { json: () => fetchPayload };
	global.fetch = (p1, p2) => {
		expect(p2).toBeDefined();
		expect(p2.mode).toBe('cors');
		expect(p2.headers).toBeDefined();
		expect(p2.headers['content-type']).toBeDefined();
		expect(p2.headers['content-type']).toBe('application/JSON');
		return Promise.resolve(mockFetchResponse);
	};

	// Func should throw, this func should never run
	const dontCall = jest.fn((r) => r);

	fetchData('POST', '/login', { body, auth: false })
		.then(dontCall)
		.catch((err) => {
			expect(err.message).toBeDefined();
			expect(err.message).toBe('Generic Error');
			expect(err.status).toBe(345);
			expect(err.details).toBeDefined();
		});
	expect(dontCall).not.toHaveBeenCalled();
});

// Fetch DELETE route, auth required - happy path
// Fetch DELETE route, auth required - happy path
// Fetch DELETE route, auth required - happy path
test('Fetch request to /delete - happy path', () => {
	// Mock the response to our fetch request
	const fetchPayload = { status: 'OK' };
	const mockFetchResponse = { json: () => fetchPayload };
	global.fetch = (p1, p2) => {
		// global.fetch = () => jest.fn.mockImplementation(
		expect(p2.headers).toBeDefined();
		expect(p2.headers.authorization).toBeDefined();
		expect(p2.headers.authorization).toBe('Bearer qwertyuiop');
		return Promise.resolve(mockFetchResponse);
	};

	// Mock the response to our localstorage requests
	Storage.prototype.getItem = () => {
		return JSON.stringify({ token: 'qwertyuiop' });
	};

	fetchData('DELETE', '/delete/123').then((response) => {
		expect(response.status).toBeDefined();
		expect(response.status).toBe('OK');
	});
});

// Do an actual fetch to the real /login route
// Do an actual fetch to the real /login route
// Do an actual fetch to the real /login route
test.skip('Actual fetch request to live API /login', () => {
	const body = {
		email: 'admin@iscool.com',
		password: 'password',
	};
	global.fetch = originalFetch;
	fetchData('POST', '/login', { body, auth: false }).then((response) => {
		expect(response.token).toBeDefined();
		expect(response.user_name).toBeDefined();
		expect(response.user_id).toBeDefined();
		expect(response.expires).toBeDefined();
		expect(response.user_name).toBe('vatsal');
		expect(typeof response.user_id).toBe(typeof 1);
		expect(typeof response.expires).toBe(typeof 1);
	});
});
