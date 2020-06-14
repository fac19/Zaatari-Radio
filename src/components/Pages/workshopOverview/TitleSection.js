import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import vars from '../../../styles';

const Section = styled.section``;

const TitleContainer = styled.div`
	background: ${vars.sand};
	display: flex;
`;

const WorshopTitle = styled.h1`
	position: relative;
	font-family: DIN Condensed;
	font-style: normal;
	font-weight: bold;
	font-size: 45px;
	line-height: 54px;
	display: flex;
	align-items: center;
	text-transform: uppercase;
	color: ${vars.night};
	margin: 0 auto;
	top: 0.4rem;
`;

const Author = styled.p``;

export default function Intro({ title, author, equipment }) {
	return (
		<Section>
			<TitleContainer>
				<WorshopTitle>{title}</WorshopTitle>
				<Author>From {author}</Author>
				<Author>{equipment}</Author>
			</TitleContainer>
		</Section>
	);
}

Intro.propTypes = {
	title: PropTypes.string,
	author: PropTypes.string,
	equipment: PropTypes.string,
};

Intro.defaultProps = {
	title: false,
	author: false,
	equipment: false,
};
