/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';
import api from '../../../api/api';
import * as SC from './style';

import './style.css';
import TitleBar from '../../WorkshopHeader/TitleBar';

export default function FeedbackForm({ ID }) {
	const [nameError, setNameError] = React.useState('');
	const [emailError, setEmailError] = React.useState('');
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		const submissionData = { ...data, workshop_id: [ID], public_comment: 'test comment' };
		console.log('onSubmit -> submissionData', submissionData);

		api
			.submitFeedback(submissionData)
			.then()
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<SC.StyledForm onSubmit={handleSubmit(onSubmit)}>
				<TitleBar title="Workshop Feedback" />
				<SC.FormLabel htmlFor="name">
					Full Name:
					<SC.FormInput
						id="name"
						type="text"
						placeholder=""
						name="name"
						ref={register({
							required: true,
							validate: (value) => {
								return /.+\s.+/i.test(value) || setNameError('Please enter your first and second name');
							},
						})}
					/>
					{nameError}
				</SC.FormLabel>
				<SC.FormLabel htmlFor="email">
					Email:
					<SC.FormInput
						id="email"
						type="text"
						placeholder=""
						name="email"
						ref={register({
							required: true,
							validate: (value) => {
								return /\S+@\S+\.\S+/i.test(value) || setEmailError('') || setEmailError('Please enter a valid email');
							},
						})}
					/>
					{emailError}
				</SC.FormLabel>
				<SC.FormLabel htmlFor="organisation">
					Organisation:
					<SC.FormInput id="organisation" type="text" placeholder="" name="organisation" ref={register} />
				</SC.FormLabel>
				<SC.FormLabel htmlFor="number_of_attendees">
					How many attendees were there?
					<SC.FormInput id="number_of_attendees" type="number" placeholder="0" name="number_of_attendees" ref={register({ required: true })} />
				</SC.FormLabel>
				<fieldset className="rating">
					<legend>Workshop Rating</legend>

					<label htmlFor="star_rating-1">1 star</label>
					<input id="star_rating-2" name="star_rating" type="radio" value="2" ref={register} />
					<label htmlFor="star_rating-2">2 stars</label>
					<input id="star_rating-3" name="star_rating" type="radio" value="3" ref={register} />
					<label htmlFor="star_rating-3">3 stars</label>
					<input id="star_rating-4" name="star_rating" type="radio" value="4" ref={register} />
					<label htmlFor="star_rating-4">4 stars</label>
					<input id="star_rating-5" name="star_rating" type="radio" value="5" ref={register} />
					<label htmlFor="star_rating-5">5 stars</label>

					<div className="stars">
						<label htmlFor="star_rating-1" aria-label="1 star" title="1 star" />
						<label htmlFor="star_rating-2" aria-label="2 stars" title="2 stars" />
						<label htmlFor="star_rating-3" aria-label="3 stars" title="3 stars" />
						<label htmlFor="star_rating-4" aria-label="4 stars" title="4 stars" />
						<label htmlFor="star_rating-5" aria-label="5 stars" title="5 stars" />
					</div>
				</fieldset>
				<SC.FormLabel htmlFor="studentFeedback">
					What did students enjoy most?
					<SC.FormText id="students_enjoyed" name="students_enjoyed" ref={register} />
				</SC.FormLabel>
				<SC.FormLabel htmlFor="public_comment">
					Public Comment
					<SC.FormText id="public_comment" name="public_comment" ref={register} />
				</SC.FormLabel>
				<SC.FormButton type="submit" innerText="Submit" />
			</SC.StyledForm>
		</>
	);
}

FeedbackForm.propTypes = {
	ID: PropTypes.string.isRequired,
};
