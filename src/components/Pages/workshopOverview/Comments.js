import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CommentsWrapper = styled.section`
	display: flex;
	flex-direction: column;
	margin: 4rem 10% 0 10%;
`;

const CommentsTitle = styled.h2`
	font-family: Roboto;
	font-style: normal;
	font-weight: bold;
	font-size: 23.43px;
	line-height: 27px;
	display: flex;
	align-items: center;
	text-align: center;
`;

const CommentsText = styled.p``;

export default function Comments({ commentsArray }) {
	return (
		<CommentsWrapper>
			<CommentsTitle>Comments</CommentsTitle>
			{/* Loop over comments object to display comments */}
			{commentsArray.map((commentObj) => (
				<CommentsText>{commentObj.text}</CommentsText>
			))}
		</CommentsWrapper>
	);
}

Comments.propTypes = {
	commentsArray: PropTypes.arrayOf(
		PropTypes.shape({
			author: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
		}),
	).isRequired,
};
