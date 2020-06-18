import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../../../api/api';

import FeedbackListItem from './FeedbackListItem';
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
						setErrorState('Feedback could not be found for this workshop');
					});
			});
			Promise.all(newFeedback).then((res) => setFeedback(res));
		}
	}, [feedbackArr]);

	function CreateCommentsList(feedbackNewArray) {
		return feedbackNewArray.map((commentObj) => <FeedbackListItem commentObj={commentObj} />);
	}

	return (
		<SC.CommentsWrapper>
			<SC.CommentsTitle>Feedback</SC.CommentsTitle>
			{CreateCommentsList(feedback)}
			<SC.CommentsTitle>{errorState}</SC.CommentsTitle>
		</SC.CommentsWrapper>
	);
}

Comments.propTypes = {
	feedbackArr: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
