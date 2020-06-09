import React from 'react';
import PropTypes from 'prop-types';
import { Title1, BGYellow } from '../styles/componentsStyles';

export default function WorkshopFeedback({ match: { params } }) {
	return (
		<>
			<BGYellow>
				<Title1>Workshop Feedback {`${params.ID}`}</Title1>
			</BGYellow>
		</>
	);
}

WorkshopFeedback.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			ID: PropTypes.string,
		}),
	}).isRequired,
};
