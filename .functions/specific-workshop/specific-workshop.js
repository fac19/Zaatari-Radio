const apiKey = process.env.AIRTABLE_KEY;
const apiBaseId = process.env.AIRTABLE_BASE;
const Airtable = require('airtable');

// const base = new Airtable({ apiKey }).base(apiBaseId);
var base = new Airtable({ apiKey: 'keyexOnoJtMSO8dka' }).base('appW2989WcgTxarh0');

exports.handler = function (event, context, callback) {
	console.log('In specific-workshop handler!');

	base('workshops').find('reclXZv3JtH77KpzW', function (err, record) {
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
