import React from 'react';
import PropTypes from 'prop-types';
import { Title1, BGYellow } from '../../styles/componentsStyles';

export default function WorkshopOverview({ match: { params } }) {
	return (
		<>
			<BGYellow>
				<Title1>Workshop Overview {`${params.ID}`}</Title1>
			</BGYellow>
		</>
	);
}

WorkshopOverview.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			ID: PropTypes.string,
		}),
	}).isRequired,
};
