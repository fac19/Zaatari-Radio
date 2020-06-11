import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Title1, BGYellow } from '../styles/componentsStyles';
import api from '../api/api';

export default function WorkshopOverview({ match: { params } }) {
	//   console.log(params);
	useEffect(() => {
		api
			.getSpecificWorkshop(params.ID)
			.then((res) => {
				console.log(res);
				return res;
			})
			.catch((err) => {
				console.log(err);
				// Think we are setting state here with the err message
				return err;
			});
	}, []);

	return (
		<>
			<BGYellow>
				<Title1>Workshop Overview</Title1>
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
