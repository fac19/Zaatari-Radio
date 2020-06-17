/* eslint-disable max-len */
import React from 'react';
import Comments from './Comments';

export default {
	component: Comments,
	title: 'Comments',
};

// Have an issue rendering comments because the component relies on state
// We could create a new component for the comment and pass in object as prop (then we can mock the object)
export const SingleComment = () => {
	return <Comments />;
};
