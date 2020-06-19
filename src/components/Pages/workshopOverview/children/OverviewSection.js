import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as SC from '../style';
import PrimaryButton from '../../../shared/Buttons/PrimaryButton'
import SecondaryButton from '../../../shared/Buttons/SecondaryButton';

export default function Main({ overview, id }) {
	return (
		<SC.MainWrapper>
			<SC.ContentDiv>
				<SC.Title>Overview</SC.Title>
				<SC.ContentText>{overview}</SC.ContentText>
			</SC.ContentDiv>
			<SC.ButtonWrapper>
				<PrimaryButton as={Link} to={`/workshop/content/${id}`} innerText="Go to Workshop" />
				<SecondaryButton as={Link} to={`/workshop/feedback/${id}`} innerText="Submit Feedback" />
			</SC.ButtonWrapper>
		</SC.MainWrapper>
	);
}

Main.propTypes = {
	overview: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};
