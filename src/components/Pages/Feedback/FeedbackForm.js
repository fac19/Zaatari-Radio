/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import api from '../../../api/api';
import * as SC from './style';

import './style.css';
import TitleBar from '../../WorkshopHeader/TitleBar';

export default function FeedbackForm({ ID }) {
	const [nameError, setNameError] = React.useState('');
	const [emailError, setEmailError] = React.useState('');
	const [numberError, setNumberError] = React.useState('');
	const [submissionError, setSubmissionError] = React.useState('');
	const [submitted, setSubmitted] = React.useState(false);
	const { register, handleSubmit } = useForm();
	const history = useHistory();

	const onSubmit = (data) => {
		if (submitted) {
			return;
		}
		setSubmitted(true);
		const submissionData = { ...data, workshop_id: [ID] };

		api
			.submitFeedback(submissionData)
			.then(() => {
				history.push(`/workshop/overview/${ID}`);
			})
			.catch(() => {
				setSubmissionError(
					<SC.ErrorMessage>We couldn&apost submit this feedback - are you sure your URL contains a valid workshop ID?</SC.ErrorMessage>,
				);
			});
	};

	return (
		<>
			<SC.StyledForm onSubmit={handleSubmit(onSubmit)}>
				<TitleBar title="Workshop Feedback" />
				<SC.FormLabel htmlFor="name">
					Full Name*:
					<SC.FormInput
						id="name"
						type="text"
						placeholder=""
						name="name"
						ref={register({
							required: true,
							validate: (value) => {
								if (/.+\s.+/i.test(value)) {
									setNameError('');
									return true;
								}
								return setNameError(<SC.ErrorMessage>Please enter your first and second name</SC.ErrorMessage>);
							},
						})}
					/>
					{nameError}
				</SC.FormLabel>
				<SC.FormLabel htmlFor="email">
					Email*:
					<SC.FormInput
						id="email"
						type="text"
						placeholder=""
						name="email"
						ref={register({
							required: true,
							validate: (value) => {
								if (/\S+@\S+\.\S+/i.test(value)) {
									setEmailError('');
									return true;
								}
								return setEmailError(<SC.ErrorMessage>Please enter a valid email</SC.ErrorMessage>);
							},
						})}
					/>
					{emailError}
				</SC.FormLabel>
				<SC.FormLabel htmlFor="organisation">
					Organisation*:
					<SC.FormInput
						id="organisation"
						type="text"
						placeholder=""
						name="organisation"
						ref={register({
							required: true,
						})}
					/>
				</SC.FormLabel>
				<SC.FormLabel htmlFor="number_of_attendees">
					How many attendees were there?*
					<SC.FormInput
						id="number_of_attendees"
						type="text"
						placeholder="0"
						name="number_of_attendees"
						ref={register({
							required: true,
							validate: (value) => {
								const match = value.match(/[0-9]+/);
								if (match) {
									return true;
								}
								return setNumberError(<SC.ErrorMessage>Please enter a number</SC.ErrorMessage>);
							},
						})}
					/>
				</SC.FormLabel>
				{numberError}
				<fieldset className="rating">
					<legend>Workshop Rating</legend>
					<input id="star_rating-1" name="star_rating" type="radio" value="1" ref={register} />
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
				<SC.FormButton type="submit" value="Submit" />
				{submissionError}
				Required fields are marked with aterisks (*)
			</SC.StyledForm>
		</>
	);
}

FeedbackForm.propTypes = {
	ID: PropTypes.string.isRequired,
};
