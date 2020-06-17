import React from 'react';
import PropTypes from 'prop-types';

import * as SC from './style';

export default function CommentListItem({ commentObj }) {
	return (
		<>
			<SC.CommentAuthor>{commentObj.name}</SC.CommentAuthor>
			<SC.CommentsText>{commentObj.Content}</SC.CommentsText>
		</>
	);
}

CommentListItem.propTypes = {
	commentObj: PropTypes.shape({
		name: PropTypes.string,
		Content: PropTypes.string,
	}).isRequired,
};
