import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../../../api/api';

import * as SC from './style';

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
								This workshop could not be found
							</h2>,
						);
					});
			});
			Promise.all(newFeedback).then((res) => setFeedback(res));
		}
	}, [feedbackArr]);

	return (
		<SC.CommentsWrapper>
			<SC.CommentsTitle>Comments</SC.CommentsTitle>
			{feedback.map((commentObj) => (
				<>
					<SC.CommentAuthor>{commentObj.name}</SC.CommentAuthor>
					<SC.CommentsText>{commentObj.Content}</SC.CommentsText>
				</>
			))}
			{errorState}
		</SC.CommentsWrapper>
	);
}

Comments.propTypes = {
	feedbackArr: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
