import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as SC from '../style';
import PrimaryButton from '../../../buttons/PrimaryButton';
import SecondaryButton from '../../../buttons/SecondaryButton';

export default function Main({ overview, id }) {
	return (
		<SC.MainWrapper>
			<SC.ContentDiv>
				<SC.Title>Overview</SC.Title>
				<SC.ContentText>{overview}</SC.ContentText>
			</SC.ContentDiv>
			<SC.ButtonWrapper>
				<PrimaryButton as={Link} to={`/workshop/content/${id}`} innerText="Workshop" />
				<SecondaryButton innerText="Submit Feedback" to={`/workshop/feedback/${id}`} />
			</SC.ButtonWrapper>
		</SC.MainWrapper>
	);
}

Main.propTypes = {
	overview: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};
