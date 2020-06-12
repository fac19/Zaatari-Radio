import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledArticle = styled.article`
	margin: 2.5rem 0 0 0;
	width: 80vw;
	max-width: 40rem;
	background: whitesmoke;
	border-radius: 1%;
	box-shadow: 5px 5px 5px 5px hsla(289, 32%, 47%, 0.72);
`;

const StyledImage = styled.img`
	width: 100%;
	border-radius: 1% 1% 0 0;
`;

const StyledCardTitle = styled.h2`
	font-family: DINCondensed;
	font-size: 30px;
	font-weight: bold;
	color: black;
	text-transform: uppercase;
	margin: 0;
	padding: 8px 0 5px 0;
`;

const StyledButton = styled.a`
	text-decoration: none;
`;

const StyledButtonContainer = styled.div`
	background: #ffcb74;
	margin: 0 20% 0 0.5rem;
	padding-left: 0.5rem;
`;

const StyledWorkshopDetails = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0.5rem 20% 0.5rem 0.5rem;
	padding: 0.5rem;
	border: solid 1px lightgrey;
`;

const StyledSpan = styled.span`
	width: 33%;
	text-align: left;
	font-family: roboto;
`;

export default function WorkshopCard({ data }) {
	// console.log("WorkshopCard -> data", data)
	return (
		<StyledArticle as={Link} to={`/workshop/overview/${data.id}`}>
			<StyledImage src={data.fields.carousel_pictures[0].url} />
			<StyledButtonContainer>
				<StyledButton as={Link} to={`/workshop/overview/${data.id}`}>
					<StyledCardTitle>{data.fields.title}</StyledCardTitle>
				</StyledButton>
			</StyledButtonContainer>
			<StyledWorkshopDetails>
				<StyledSpan>Time: {data.fields.table_of_contents}</StyledSpan>
				<StyledSpan>Comments: {data.fields.feedback.length}</StyledSpan>
				<StyledSpan>Rating: {data.fields.average_rating}</StyledSpan>
			</StyledWorkshopDetails>
		</StyledArticle>
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
