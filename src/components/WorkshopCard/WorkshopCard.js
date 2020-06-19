import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as SC from './style';

export default function WorkshopCard({ data }) {
	// this dataObj ensures that if any of the fields in the airtable is empty, it doesn't break the app
	// can refactor this to handle the error like in the workshop overview page
	// (e.g. using the error handling in the getFromJSON function)
	// the WorkshopCard component should also be moved into a children folder of AllWorkshops
	// the allWorkshops needs to be refactored to use hooks like the other pages have
	const dataObj = {
		id: data.id ? data.id : '',
		image: data.fields.carousel_pictures ? data.fields.carousel_pictures[0].url : '',
		title: data.fields.title ? data.fields.title : '',
		duration: data.fields.duration ? data.fields.duration : '',
		feedbackLength: data.fields.feedback ? data.fields.feedback.length : '',
		averageRating: data.fields.average_rating ? data.fields.average_rating : '',
	};

	return (
		<SC.Article>
			<Link to={`/workshop/overview/${dataObj.id}`}>
				<SC.Image src={dataObj.image} />
			</Link>
			<SC.ButtonContainer>
				<SC.Button as={Link} to={`/workshop/overview/${dataObj.id}`}>
					<SC.CardTitle>{dataObj.title}</SC.CardTitle>
				</SC.Button>
			</SC.ButtonContainer>
			<SC.WorkshopDetails>
				<SC.Span>Duration: {dataObj.duration}hrs</SC.Span>
				<SC.Span>Feedback: {dataObj.feedbackLength}</SC.Span>
				<SC.Span>Rating: {dataObj.averageRating}</SC.Span>
			</SC.WorkshopDetails>
		</SC.Article>
	);
}

WorkshopCard.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.string,
		fields: PropTypes.shape({
			title: PropTypes.string,
			duration: PropTypes.string,
			feedback: PropTypes.array,
			average_rating: PropTypes.number,
			carousel_pictures: PropTypes.array,
		}),
	}),
};

WorkshopCard.defaultProps = {
	data: {
		id: '#',
		fields: {
			title: 'Default Workshop',
			duration: '0',
			feedback: ['dasfaas', 'asdasdasd'],
			average_rating: 0,
			carousel_pictures: [{ url: 'https://picsum.photos/id/1073/640/225' }],
		},
	},
};
