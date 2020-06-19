import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

import * as SC from './style';

import WorkshopHeader from '../../shared/WorkshopHeader/WorkshopHeader';
import BackButton from '../../shared/Buttons/BackButton';
import PrimaryButton from '../../shared/Buttons/PrimaryButton';

import useSpecificWorkshop from '../../../api/hooks/useSpecificWorkshop';

export default function WorkshopContent({ match: { params } }) {
	const [errorState, setErrorState] = React.useState('');
	const [workshop, setWorkshop] = React.useState({});
	useSpecificWorkshop(params.ID, setWorkshop, setErrorState);

	return (
		<>
			<WorkshopHeader images={workshop.images} date={workshop.date_created} tags={workshop.tags} title={workshop.title} />
			<SC.MainContainer>
				{workshop.content ? <Markdown>{workshop.content}</Markdown> : <h1>loading</h1>}
				<SC.ButtonsWrapper>
					<BackButton to={`/workshop/overview/${params.ID}`} />
					<PrimaryButton innerText="Worksheets" to={`/workshop/worksheets/${params.ID}`} />
				</SC.ButtonsWrapper>
				{errorState}
			</SC.MainContainer>
		</>
	);
}

WorkshopContent.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			ID: PropTypes.string,
		}),
	}).isRequired,
};
