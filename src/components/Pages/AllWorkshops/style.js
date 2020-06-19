import styled from 'styled-components';
import * as vars from '../../../assets/styles/variables';

export const Main = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 2rem;
`;

export const Title = styled.h1`
	text-transform: uppercase;
	font-family: ${vars.headerFont};
	font-style: normal;
	font-weight: normal;
	font-size: 45px;
	line-height: 45px;
	color: #322f2f;
`;

export const AllWorkshopHeader = styled.div`
	padding: 5rem 0 3rem 0;
	width: 100%;
	height: 56px;
	background: #ffcb74;
	display: flex;
	align-items: center;
	justify-content: center;
`;
