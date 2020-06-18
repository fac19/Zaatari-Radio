import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as SC from './style';

export default function WorkshopCard({ data }) {
	return (
		<SC.Article>
			<Link to={`/workshop/overview/${data.id}`}>
				<SC.Image src={data.fields.carousel_pictures[0].url} />
			</Link>
			<SC.ButtonContainer>
				<SC.Button as={Link} to={`/workshop/overview/${data.id}`}>
					<SC.CardTitle>{data.fields.title}</SC.CardTitle>
				</SC.Button>
			</SC.ButtonContainer>
			<SC.WorkshopDetails>
				<SC.Span>Duration: {data.fields.duration}hrs</SC.Span>
				<SC.Span>Feedback: {data.fields.feedback.length}</SC.Span>
				<SC.Span>Rating: {data.fields.average_rating}</SC.Span>
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
			feedback: PropTypes.string,
			average_rating: PropTypes.string,
			carousel_pictures: PropTypes.array,
		}),
	}).isRequired,
};
