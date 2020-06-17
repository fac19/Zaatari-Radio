import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import api from '../../../api/api';
import getFromJSON from '../../../utils/getFromJSON';

import * as SC from './style';
import WorkshopHeader from '../../WorkshopHeader/WorkshopHeader';
import Intro from './TitleSection';
import Main from './MainSection';
import Comments from './Comments';
import BackButton from '../../buttons/BackButton';

export default function WorkshopOverview({ match: { params } }) {
	const [errorState, setErrorState] = React.useState('');
	const [workshop, setWorkshop] = React.useState({});
	console.log('WorkshopOverview -> workshop', workshop);

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
		<>
			<WorkshopHeader images={workshop.images} date={workshop.date_created} tags={workshop.tags} title={workshop.title} />
			<SC.MainContainer>
				<Intro authorArr={workshop.workshop_authors} equipment={null} />
				<Main overview={workshop.overview} id={params.ID} />
				<Comments feedbackArr={workshop.feedback} />
				<BackButton to="/workshops" />

				{errorState}
			</SC.MainContainer>
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
