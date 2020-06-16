import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

// import Iframe from 'react-iframe';

import * as SC from './style';

import WorkshopHeader from '../../WorkshopHeader/WorkshopHeader';
import BackButton from '../../buttons/BackButton';
import PrimaryButton from '../../buttons/PrimaryButton';

import getFromJSON from '../../../utils/getFromJSON';
import api from '../../../api/api';

export default function WorkshopContent({ match: { params } }) {
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
		<>
			<WorkshopHeader images={workshop.images} date={workshop.date_created} tags={workshop.tags} title={workshop.title} />
			<SC.MainContainer>
				{workshop.content ? <Markdown>{workshop.content}</Markdown> : <h1>loading</h1>}
				<SC.ButtonsWrapper>
					<BackButton />
					<PrimaryButton innerText="DOWNLOAD ALL" />
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
