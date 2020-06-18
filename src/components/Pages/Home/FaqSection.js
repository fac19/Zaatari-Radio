/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import * as SC from './style';

function FAQ({ q, a }) {
	return (
		<article>
			<SC.Text>Q: {q}</SC.Text>
			<SC.Text>A: {a}</SC.Text>
		</article>
	);
}

export default function FAQs() {
	return (
		<SC.Section>
			<SC.Title>FAQs</SC.Title>
			<FAQ q="How do I access workshops?" a="Navigate to the workshop tab and browse away. Use the filters to find the project that suitsyou best!" />
			<FAQ
				q="How can I contribute?"
				a="Become a member to gain access to unlimited resources and the ability to provide feedbackon the workshops you have implemented"
			/>
			<FAQ
				q="How can I contact other organisations?"
				a="Once a member, you will be able to access the profile of other members who havecontributed to the database. Ask specific questions about projects, open conversations andstart collaborating."
			/>
		</SC.Section>
	);
}

FAQ.propTypes = {
	a: PropTypes.string.isRequired,
	q: PropTypes.string.isRequired,
};
