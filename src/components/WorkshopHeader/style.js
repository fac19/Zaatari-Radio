import styled from 'styled-components';
import * as vars from '../../styles/variables';

export const TitleContainer = styled.div`
	background: ${vars.sand};
	display: flex;
`;

export const WorkshopTitle = styled.h1`
	font-family: DINCondensed-Bold;
	font-style: normal;
	font-weight: bold;
	font-size: 45px;
	display: flex;
	align-items: center;
	text-transform: uppercase;
	color: ${vars.night};
	margin: 0 auto;
	padding: ${vars.titleBarVerticalPadding} 0;
`;

export const Header = styled.header`
	background-color: ${vars.night};
`;

export const TagSpan = styled.span`
	max-width: 75%;
	overflow: auto;
	white-space: nowrap;
	padding: 0.5rem 0;
`;

export const DateSpan = styled.span`
	max-width: 25%;
	padding: 0.5rem 0;
`;
