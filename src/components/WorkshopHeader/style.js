import styled from 'styled-components';
import vars from '../../styles';

export const TitleContainer = styled.div`
	background: ${vars.sand};
	display: flex;
`;

export const WorkshopTitle = styled.h1`
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

export const Header = styled.header``;

export const Tags = styled.span`
	max-width: 75%;
`;

export const Date = styled.span`
	max-width: 25%;
`;
