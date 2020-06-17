import styled from 'styled-components';
import * as vars from '../../../styles/variables';

const LinkBox = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	max-width: ${vars.cardWidth};
`;

const StyledLink = styled.a`
	display: block;
	font-family: ${vars.standardFont};
	margin: 1em;
	text-decoration: underline;
	color: ${vars.night};
`;

const IconBox = styled.a`
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: ${vars.night};
`;
const PageTitle = styled.h2`
	text-align: center;
	font-family: ${vars.standardFont};
	text-decoration: underline;
`;

export default { LinkBox, StyledLink, IconBox, PageTitle };
