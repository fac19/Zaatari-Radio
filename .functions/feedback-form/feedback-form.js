var Airtable = require('airtable');
const apiKey = process.env.AIRTABLE_KEY;
const apiBaseId = process.env.AIRTABLE_BASE;
const Airtable = require('airtable');

var base = new Airtable({ apiKey }).base(apiBaseId);

base('feedback').create(
	[
		{
			fields: {
				Content: 'Bravo, great workshop',
				workshop_id: ['reclXZv3JtH77KpzW'],
				name: 'joe',
			},
		},
		{
			fields: {
				Content: 'very good',
				workshop_id: ['reclXZv3JtH77KpzW'],
				name: 'ivo',
			},
		},
	],
	function (err, records) {
		if (err) {
			console.error(err);
			return;
		}
		records.forEach(function (record) {
			console.log(record.getId());
		});
	},
);
