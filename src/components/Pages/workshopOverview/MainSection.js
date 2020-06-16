import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import PrimaryButton from '../../buttons/PrimaryButton';
import SecondaryButton from '../../buttons/SecondaryButton';

const MainWrapper = styled.section`
	display: flex;
	flex-direction: column;
`;

const ContentDiv = styled.div``;

const Title = styled.h1`
	font-family: Roboto;
	font-style: normal;
	font-weight: bold;
	font-size: 23.43px;
	line-height: 27px;
	display: flex;
	align-items: center;
	text-align: center;
`;

const ContentText = styled.p`
	font-family: Roboto;
	font-style: normal;
	font-weight: 300;
	font-size: 16px;
	line-height: 19px;
	display: flex;
	align-items: center;
	text-align: justify;
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 4rem;
`;

export default function Main({ overview, id }) {
	return (
		<MainWrapper>
			<ContentDiv>
				<Title>Overview</Title>
				<ContentText>{overview}</ContentText>
			</ContentDiv>
			<ButtonWrapper>
				<PrimaryButton as={Link} to={`/workshop/content/${id}`} innerText="Workshop" />
				<SecondaryButton innerText="Submit Feedback" />
			</ButtonWrapper>
		</MainWrapper>
	);
}

Main.propTypes = {
	overview: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};
