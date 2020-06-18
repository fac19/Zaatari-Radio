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

export default function FeedbackForm({ match: { params } }) {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data) => {
		// How does airtable want the ID to be provided?
		api
			.submitFeedback(params.ID, [{ fields: data }])
			.then()
			.catch();

		console.log('data', data);
		/* data looks like: 
      {
        attendees: "2"
        comments: "asdf"
        email: "asdf@asdf.com"
        name: "asdf asdf"
        organisation: "asdf"
        starRating: " 5"
        studentFeedback: "asdf"
      }
    */
	};
	console.log('error', errors);

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
				<label htmlFor="attendees">
					How many attendees were there?
					<input id="attendees" type="number" placeholder="0" name="attendees" ref={register({ required: true })} />
				</label>
				<fieldset>
					<legend>Rating:</legend>
					<input name="starRating" type="radio" value="1" ref={register} />
					<input name="starRating" type="radio" value=" 2" ref={register} />
					<input name="starRating" type="radio" value=" 3" ref={register} />
					<input name="starRating" type="radio" value=" 4" ref={register} />
					<input name="starRating" type="radio" value=" 5" ref={register} />
				</fieldset>
				<label htmlFor="studentFeedback">
					What did students enjoy most?
					<textarea id="studentFeedback" name="studentFeedback" ref={register} />
				</label>
				<label htmlFor="additionalComments">
					Public Comment
					<textarea id="additionalComments" name="comments" ref={register} />
				</label>
				<input type="submit" />
			</StyledForm>
		</>
	);
}

FeedbackForm.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			ID: PropTypes.string,
		}),
	}).isRequired,
};
