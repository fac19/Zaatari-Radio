import styled from 'styled-components';
import * as vars from '../../styles/variables';

// WorkshopHeader Styles
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

export const ImgDiv = styled.div`
	min-height: 20vh;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	padding: 0.5rem;
`;

// TitleBar Styles
export const TitleContainer = styled.div`
	background: ${vars.sand};
	display: flex;
	justify-content: center;
`;

export const WorkshopTitle = styled.h1`
	font-family: ${vars.headerFont};
	font-size: ${vars.DinHeaderBig};
	margin: 0;
	text-align: center;
	padding: ${vars.titleBarVerticalPadding} 0;
	text-transform: uppercase;
	color: ${vars.night};
`;
