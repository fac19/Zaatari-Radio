import React from 'react';
import PropTypes from 'prop-types';

import FeedbackForm from './FeedbackForm';

export default function Feedback({ match: { params } }) {
	return (
		<main>
			<FeedbackForm id={params.ID} />
		</main>
	);
}

Feedback.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			ID: PropTypes.string,
		}),
	}).isRequired,
};
