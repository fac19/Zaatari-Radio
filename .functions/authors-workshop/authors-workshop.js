const apiKey = process.env.AIRTABLE_KEY;
const apiBaseId = process.env.AIRTABLE_BASE;
const Airtable = require('airtable');

var base = new Airtable({ apiKey }).base(apiBaseId);

exports.handler = function (event, context, callback) {
	const ID = event.queryStringParameters.id;
	// console.log('exports.handler -> ID', ID);

	base('workshop_authors').find(ID, function (err, record) {
		if (err) {
			callback(err);
		} else {
			const body = JSON.stringify(record);
			const response = {
				statusCode: 200,
				body: body,
				headers: {
					'content-type': 'application/json',
					'cache-control': 'Cache-Control: max-age=300, public',
				},
			};
			callback(null, response);
		}
	});
};
