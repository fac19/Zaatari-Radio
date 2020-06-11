import React from 'react';
import PropTypes from 'prop-types';
import { Title1, BGYellow } from '../../styles/componentsStyles';

export default function WorkshopWorksheet({ match: { params } }) {
	return (
		<>
			<BGYellow>
				<Title1>Workshop Worksheet {`${params.ID}`}</Title1>
			</BGYellow>
		</>
	);
}

WorkshopWorksheet.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			ID: PropTypes.string,
		}),
	}).isRequired,
};
