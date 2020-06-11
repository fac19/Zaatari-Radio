import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
	margin-top: 73px;
	background: #ffcb74;
	display: flex;
	flex-direction: column;
	height: 255px;
`;

const Title = styled.h1`
	font-family: DIN Condensed;
	font-style: normal;
	font-weight: bold;
	font-size: 45px;
	line-height: 54px;
	display: flex;
	align-items: center;
	text-align: center;
	text-transform: uppercase;
	margin: 64px 0 0 45px;
`;

const LanderText = styled.p`
	font-family: Roboto;
	font-style: italic;
	font-weight: normal;
	font-size: 14px;
	line-height: 16px;
	display: flex;
	align-items: center;
	color: #322f2f;
	margin: 0 45px 0 45px;
`;

const HowToLink = styled.a`
	font-family: Roboto;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 16px;
	display: flex;
	align-items: center;
	text-align: center;
	text-transform: uppercase;
	color: #322f2f;
	margin: 90px 45px 24px 45px;
`;

export default function LanderSection() {
	return (
		<Section>
			<Title>Zaatari Radio</Title>
			<LanderText>Innovative humanitarian relief empowering war-affected communities</LanderText>
			<HowToLink>how does it work</HowToLink>
		</Section>
	);
}
