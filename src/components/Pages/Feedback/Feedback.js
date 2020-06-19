import React from 'react';
import PropTypes from 'prop-types';
import FeedbackForm from './FeedbackForm';
import BackButton from '../../buttons/BackButton';

export default function Feedback({ match: { params } }) {
	return (
		<section>
			<FeedbackForm ID={params.ID} />
			<BackButton to={`/workshop/overview/${params.ID}`} />
		</section>
	);
}

Feedback.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			ID: PropTypes.string,
		}),
	}).isRequired,
};
