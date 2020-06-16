import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import api from '../../../api/api';

const CommentsWrapper = styled.section`
	display: flex;
	flex-direction: column;
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

const Author = styled.h3`
	margin: 0;
	padding-left: 1rem;
	font-family: Roboto;
	font-style: italic;
	font-weight: 400;
	font-size: 20px;
	line-height: 16px;
	display: flex;
	align-items: center;
`;

const CommentsText = styled.p`
	margin: 0.5rem 0 2rem 0;
	font-family: Roboto;
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

export default function Comments({ feedbackArr }) {
	const [feedback, setFeedback] = React.useState([]);
	const [errorState, setErrorState] = React.useState('');

	useEffect(() => {
		if (feedbackArr) {
			const newFeedback = feedbackArr.map((record) => {
				return api
					.getSpecificFeedback(record)
					.then((res) => {
						return res.fields;
					})
					.catch(() => {
						setErrorState(
							<h2>
								<br />
								<br />
								This workshop couldnt be found
							</h2>,
						);
					});
			});
			Promise.all(newFeedback).then((res) => setFeedback(res));
		}
	}, [feedbackArr]);

	return (
		<CommentsWrapper>
			<CommentsTitle>Comments</CommentsTitle>
			{feedback.map((commentObj) => (
				<>
					<Author>{commentObj.name}</Author>
					<CommentsText>{commentObj.Content}</CommentsText>
				</>
			))}
			{errorState}
		</CommentsWrapper>
	);
}

Comments.propTypes = {
	feedbackArr: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
