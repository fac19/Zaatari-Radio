import styled from 'styled-components';
import * as vars from '../../../styles/variables';

// WorkshopOverview Styles
export const MainContainer = styled.main`
	margin: 2rem auto;
	max-width: ${vars.mainContainerWidth};
`;

// Intro Section Styles
export const Section = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
`;

export const AuthorText = styled.p`
	font-family: ${vars.standardFont};
	font-weight: bold;
	font-size: ${vars.smallP};
	margin: 0.25rem 0;
`;

export const AuthorSpan = styled.span`
	margin-left: 0.5rem;
	font-weight: normal;
`;

// Overview Section Styles

export const MainWrapper = styled.section`
	display: flex;
	flex-direction: column;
`;

export const ContentDiv = styled.div``;

export const Title = styled.h1`
	font-family: ${vars.standardFont};
	font-style: normal;
	font-weight: bold;
	font-size: 23.43px;
	line-height: 27px;
	display: flex;
	align-items: center;
	text-align: center;
`;

export const ContentText = styled.p`
	font-family: ${vars.standardFont};
	font-style: normal;
	font-weight: 300;
	font-size: 16px;
	line-height: 19px;
	display: flex;
	align-items: center;
	text-align: justify;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 4rem;
`;

// Feedback Section Styles
export const CommentsWrapper = styled.section`
	display: flex;
	flex-direction: column;
`;

export const CommentsTitle = styled.h2`
	font-family: ${vars.standardFont};
	font-style: normal;
	font-weight: bold;
	font-size: 23.43px;
	line-height: 27px;
	display: flex;
	margin: 4rem 0 2rem 0;
	align-items: center;
	text-align: center;
`;

export const CommentAuthor = styled.h3`
	margin: 0;
	padding-left: 1rem;
	font-family: ${vars.standardFont};
	font-style: italic;
	font-weight: 400;
	font-size: 20px;
	line-height: 16px;
	display: flex;
	align-items: center;
`;

export const CommentsText = styled.p`
	margin: 0.5rem 0 2rem 0;
	font-family: ${vars.standardFont};
	font-style: normal;
	font-weight: 300;
	font-size: 12px;
	line-height: 14px;
	display: flex;
	align-items: center;
	background: #e8e8e8;
	border-radius: 2px;
	padding: 1rem;
`;
