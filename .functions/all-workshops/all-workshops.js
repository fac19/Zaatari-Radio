const apiKey = process.env.AIRTABLE_KEY;
const apiBaseId = process.env.AIRTABLE_BASE;
const Airtable = require('airtable');

const base = new Airtable({ apiKey }).base(apiBaseId);

exports.handler = function (event, context, callback) {
	console.log(3);
	const allRecords = [];
	base('workshops')
		.select({
			maxRecords: 100,
			view: 'Grid view',
		})
		.eachPage(
			function page(records, fetchNextPage) {
				records.forEach(function (record) {
					allRecords.push(record);
				});
				fetchNextPage();
			},
			function done(err) {
				if (err) {
					callback(err);
				} else {
					const body = JSON.stringify({ records: allRecords });
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
			},
		);
};