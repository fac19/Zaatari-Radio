import React from 'react';
import PropTypes from 'prop-types';

import * as SC from './style';

export default function FeedbackListItem({ commentObj }) {
	return (
		<>
			<SC.CommentAuthor>{commentObj.name}</SC.CommentAuthor>
			<SC.CommentsText>{commentObj.public_comment}</SC.CommentsText>
		</>
	);
}

FeedbackListItem.propTypes = {
	commentObj: PropTypes.shape({
		name: PropTypes.string,
		public_comment: PropTypes.string,
	}).isRequired,
};
