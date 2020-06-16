import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as vars from './variables';

export const Title1 = styled.h1`
	text-transform: uppercase;
	font-family: ${vars.headerFont};
	font-style: normal;
	font-weight: normal;
	font-size: 45px;
	line-height: 45px;
	color: #322f2f;
`;

export const NavTitle = styled.h1`
	margin: 0 2rem;
	text-transform: uppercase;
	font-family: ${vars.headerFont};
	font-style: normal;
	font-weight: normal;
	font-size: 30px;
	line-height: 50px;
	color: ${vars.offWhite};
`;

export const StyledLink = styled(Link)`
	color: inherit;
	text-decoration: inherit;
	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;
