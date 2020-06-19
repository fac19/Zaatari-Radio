import React from 'react';
import PropTypes from 'prop-types';

import useSpecificWorkshop from '../../../api/hooks/useSpecificWorkshop';

import * as SC from './style';
import WorkshopHeader from '../../shared/WorkshopHeader/WorkshopHeader';
import IntroSection from './children/IntroSection';
import OverviewSection from './children/OverviewSection';
import FeedbackSection from './children/FeedbackSection';
import BackButton from '../../shared/Buttons/BackButton';

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
