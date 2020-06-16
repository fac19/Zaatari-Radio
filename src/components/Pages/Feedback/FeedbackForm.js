import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 70vw;
`;

export default function FeedbackForm() {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => console.log('data', data);
	console.log(errors);

	return (
		<>
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="name">
					Name:
					<input id="name" type="text" placeholder="" name="Name" ref={register({ required: true, pattern: /.+\s.+/i })} />
				</label>
				<label htmlFor="email">
					Email:
					<input id="email" type="text" placeholder="" name="Email" ref={register({ required: true, pattern: /\S+@\S+\.\S+/i })} />
				</label>
				<label htmlFor="organisation">
					Organisation:
					<input id="organisation" type="text" placeholder="" name="Organisation" ref={register} />
				</label>
				<label htmlFor="attendees">
					How many attendees were there?
					<input id="attendees" type="number" placeholder="0" name="How many attendees were there?" ref={register({ required: true })} />
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
					Additional Comments
					<textarea id="additionalComments" name="comments" ref={register} />
				</label>
				<input type="submit" />
			</StyledForm>
		</>
	);
}
