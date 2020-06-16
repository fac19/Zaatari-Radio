import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import api from '../../../api/api';
import getFromJSON from './getFromJSON';

import Intro from './TitleSection';
import Main from './MainSection';
import Comments from './Comments';

import WorkshopHeader from '../../WorkshopHeader/WorkshopHeader';

import BackButton from '../../buttons/BackButton';

const MainContainer = styled.div`
	margin: 4rem 10% 0 10%;
`;
export default function WorkshopOverview({ match: { params } }) {
	const [errorState, setErrorState] = React.useState('');
	const [workshop, setWorkshop] = React.useState({});

	useEffect(() => {
		api
			.getSpecificWorkshop(params.ID)
			.then((res) => {
				setWorkshop(getFromJSON(res));
			})
			.catch(() => {
				setErrorState(
					<h2>
						<br />
						<br />
						This workshop couldnt be found
					</h2>,
				);
			});
	}, [params.ID]);

	return (
		<MainContainer>
			<WorkshopHeader images={workshop.images} date={workshop.date_created} tags={workshop.tags} title={workshop.title} />
			<Intro authorArr={workshop.workshop_authors} equipment={null} />
			<Main content={workshop.overview} />
			<Comments feedbackArr={workshop.feedback} />
			<BackButton to="/workshops" />
			{errorState}
		</MainContainer>
	);
}

WorkshopOverview.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			ID: PropTypes.string,
		}),
	}).isRequired,
};
