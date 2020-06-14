import React from 'react';
import PropTypes from 'prop-types';
import * as SC from './style'

function FAQ({ q, a }) {
	return (
		<SC.FaqPair>
			<p>Q: {q}</p>
			<p>A: {a}</p>
		</SC.FaqPair>
	);
}

export default function FAQs() {
	return (
		<SC.FaqSection>
			<SC.FaqTitle>FAQs</SC.FaqTitle>
			<FAQ q="How do I view workshop resources?" a="Navigate to the workshops and browse away" />
			<FAQ q="How can I get involved?" a="You can get in contact at 123@email.com" />
			<FAQ q="How can I contribute to the workshops?" a="You can get in contact at 123@email.com" />
		</SC.FaqSection>
	);
}

FAQ.propTypes = {
	a: PropTypes.string.isRequired,
	q: PropTypes.string.isRequired,
};
