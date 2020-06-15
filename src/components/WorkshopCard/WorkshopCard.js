import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as SC from './style';

export default function WorkshopCard({ data }) {
	return (
		<SC.Article as={Link} to={`/workshop/overview/${data.id}`}>
			<SC.Image src={data.fields.carousel_pictures[0].url} />
			<SC.ButtonContainer>
				<SC.Button as={Link} to={`/workshop/overview/${data.id}`}>
					<SC.CardTitle>{data.fields.title}</SC.CardTitle>
				</SC.Button>
			</SC.ButtonContainer>
			<SC.WorkshopDetails>
				<SC.Span>Time: {data.fields.table_of_contents}</SC.Span>
				<SC.Span>Comments: {data.fields.feedback.length}</SC.Span>
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
			table_of_contents: PropTypes.string,
			feedback: PropTypes.string,
			average_rating: PropTypes.string,
			carousel_pictures: PropTypes.array,
		}),
	}).isRequired,
};
