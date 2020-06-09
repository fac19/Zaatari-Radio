import styled from 'styled-components';
import { Link } from 'react-router-dom';

const white = '#F2F2F2';
// const olive = '#b1b493';
// const ocean = '#4f8a8b';
// const night = '#07031a';

const BGYellow = styled.div`
	position: relative;
	top: 3.7rem;
	width: 100%;
	height: 56px;
	background: #ffcb74;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Title1 = styled.h1`
	text-transform: uppercase;
	font-family: DINCondensed;
	font-style: normal;
	font-weight: normal;
	font-size: 45px;
	line-height: 45px;
	color: #322f2f;
`;

const NavTitle = styled.h1`
	margin: 0 2rem;
	text-transform: uppercase;
	font-family: DINCondensed;
	font-style: normal;
	font-weight: normal;
	font-size: 30px;
	line-height: 50px;
	color: ${white};
`;

const StyledLink = styled(Link)`
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

export { BGYellow, Title1, NavTitle, StyledLink };
