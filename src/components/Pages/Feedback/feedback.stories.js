import React from 'react';
import FeedbackForm from './FeedbackForm';
import * as SC from './style';

export default { title: 'Feedback form' };

export const form = () => <FeedbackForm />;

export const formNameInput = () => (
	<SC.StyledForm>
		<SC.FormLabel htmlFor="name">
			Full Name*:
			<SC.FormInput id="name" type="text" placeholder="" name="name" />
		</SC.FormLabel>
	</SC.StyledForm>
);
