const apiKey = process.env.AIRTABLE_KEY;
const apiBaseId = process.env.AIRTABLE_BASE;
const Airtable = require('airtable');

var base = new Airtable({ apiKey }).base(apiBaseId);

const data = {
	public_comment: 'hoorah!',
	workshop_id: ['reclXZv3JtH77KpzW'],
	name: 'joe',
};

exports.handler = function (event, context, callback) {
	base('feedback').create(data, { typecast: true }, function (err, records) {
		if (err) {
			callback(null, {
				statusCode: 500,
				body: JSON.stringify(err),
			});
		}
		callback(null, {
			statusCode: 200,
			body: JSON.stringify(records),
		});
	});

	//   return {
	//     statusCode: 200,
	//     body: 'records',
	//   };
};
