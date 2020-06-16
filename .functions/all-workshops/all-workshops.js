const apiKey = process.env.AIRTABLE_KEY;

const apiBaseId = process.env.AIRTABLE_BASE;

const Airtable = require('airtable');

const base = new Airtable({ apiKey }).base(apiBaseId);

exports.handler = function (event, context, callback) {
	// console.log('all-workshop handler called');
	const allRecords = [];
	base('workshops')
		.select({
			maxRecords: 100,
			view: 'Grid view',
			fields: ['title', 'carousel_pictures', 'average_rating', 'feedback', 'duration'],
			// TODO: database does not yet support some of the features we'd need, including
			// tags (many-many) and number
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
