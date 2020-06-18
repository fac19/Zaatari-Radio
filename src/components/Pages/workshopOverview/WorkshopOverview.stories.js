/* eslint-disable max-len */
import React from 'react';
import FeedbackSection from './FeedbackSection';

export default {
	component: FeedbackSection,
	title: 'FeedbackSection',
};

// Have an issue rendering Feedback because the component relies on state
// We could create a new component for the comment and pass in object as prop (then we can mock the object)
export const SingleComment = () => {
	return <FeedbackSection />;
};
