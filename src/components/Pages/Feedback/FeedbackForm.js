import React from 'react';
import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import api from '../../../api/api';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 70vw;
	margin-top: 8rem;
`;

export default function FeedbackForm({ ID }) {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data, e) => {
		const submissionData = { ...data, workshop_id: [ID], public_comment: 'test comment' };
		console.log('onSubmit -> submissionData', submissionData, e);

		api
			.submitFeedback(submissionData)
			.then()
			.catch((err) => {
				console.log(err);
			});
		/* data looks like: 
      {
        number_of_attendees: "2"
        comments: "asdf"
        email: "asdf@asdf.com"
        name: "asdf asdf"
        organisation: "asdf"
        star_rating: " 5"
        students_enjoyed: "asdf"
      }
    */
	};

	return (
		<>
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="name">
					Full Name:
					<input id="name" type="text" placeholder="" name="name" ref={register({ required: true, pattern: /.+\s.+/i })} />
				</label>
				<label htmlFor="email">
					Email:
					<input id="email" type="text" placeholder="" name="email" ref={register({ required: true, pattern: /\S+@\S+\.\S+/i })} />
				</label>
				<label htmlFor="organisation">
					Organisation:
					<input id="organisation" type="text" placeholder="" name="organisation" ref={register} />
				</label>
				<label htmlFor="number_of_attendees">
					How many attendees were there?
					<input id="number_of_attendees" type="number" placeholder="0" name="number_of_attendees" ref={register({ required: true })} />
				</label>
				<fieldset>
					<legend>Rating:</legend>
					<input name="star_rating" type="radio" value="1" ref={register} />
					<input name="star_rating" type="radio" value=" 2" ref={register} />
					<input name="star_rating" type="radio" value=" 3" ref={register} />
					<input name="star_rating" type="radio" value=" 4" ref={register} />
					<input name="star_rating" type="radio" value=" 5" ref={register} />
				</fieldset>
				<label htmlFor="studentFeedback">
					What did students enjoy most?
					<textarea id="students_enjoyed" name="students_enjoyed" ref={register} />
				</label>
				<label htmlFor="public_comment">
					Public Comment
					<textarea id="public_comment" name="public_comment" ref={register} />
				</label>
				<input type="submit" />
			</StyledForm>
		</>
	);
}

FeedbackForm.propTypes = {
	ID: PropTypes.string.isRequired,
};
