import styled from 'styled-components';
import * as vars from '../../styles/variables';

export const Article = styled.article`
	margin: 2.5rem 0 0 0;
	max-width: ${vars.cardWidth};
	min-width: ${vars.cardWidth};
	background: whitesmoke;
	border-radius: 1%;
	box-shadow: 5px 5px 5px 5px hsla(0, 10%, 10%, 0.3);
`;

export const Image = styled.img`
	width: 100%;
	max-height: 225px;
	border-radius: 1% 1% 0 0;
`;

export const CardTitle = styled.h2`
	font-family: ${vars.headerFont};
	font-size: 30px;
	font-weight: bold;
	color: black;

	margin: 0;
	padding: 8px 0 5px 0;
`;

export const Button = styled.a`
	text-decoration: none;
`;

export const ButtonContainer = styled.div`
	background: #ffcb74;
	margin: 0.5rem 20% 0 0.5rem;
	padding-left: 0.5rem;
`;

export const WorkshopDetails = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0.5rem 20% 0.5rem 0.5rem;
	padding: 0.5rem;
	border: solid 1px lightgrey;
`;

export const Span = styled.span`
	width: 33%;
	text-align: left;
	font-family: ${vars.standardFont};
`;
