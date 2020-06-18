import React from 'react';
import PropTypes from 'prop-types';

import useSpecificWorkshop from '../../../hooks/useSpecificWorkshop';

import * as SC from './style';
import WorkshopHeader from '../../WorkshopHeader/WorkshopHeader';
import IntroSection from './IntroSection';
import OverviewSection from './OverviewSection';
import FeedbackSection from './FeedbackSection';
import BackButton from '../../buttons/BackButton';

export default function WorkshopOverview({ match: { params } }) {
	const [errorState, setErrorState] = React.useState(null);
	const [workshop, setWorkshop] = React.useState({});
	useSpecificWorkshop(params.ID, setWorkshop, setErrorState);

	return (
		<>
			<WorkshopHeader images={workshop.images} date={workshop.date_created} tags={workshop.tags} title={workshop.title} />
			<SC.MainContainer>
				{errorState ? (
					<SC.Title>{errorState}</SC.Title>
				) : (
					<>
						<IntroSection authorArr={workshop.workshop_authors} equipment={null} />
						<OverviewSection overview={workshop.overview} id={params.ID} />
						<FeedbackSection feedbackArr={workshop.feedback} />
					</>
				)}
				<BackButton to="/workshops" />
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
