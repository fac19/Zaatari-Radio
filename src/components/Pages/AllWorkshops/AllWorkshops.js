import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Title1, BGYellow } from '../../../styles/componentsStyles';
import api from '../../../api/api';

const StyledMain = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 4rem;
`;

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

export default function AllWorkshops() {
	const [allWorkshopData, setAllWorkshopData] = React.useState(null);
	const [error, setError] = React.useState('');
	React.useEffect(() => {
		api
			.getWorkshops()
			.then((result) => {
				setAllWorkshopData(result.records);
			})
			.catch((err) => {
				setError(err.details);
			});
	}, []);

	function createWorkshopList() {
		const data = allWorkshopData[0];
		// const workshopCardData = {
		// 	imageUrl: data.fields.carousel_pictures[0].url,
		// 	title: data.fields.title,
		// 	time: data.fields.table_of_contents,
		// 	comments: data.fields.feedback.length,
		// 	rating: data.fields.average_rating
		// }

		// console.log('createWorkshopList -> allWorkshopData', allWorkshopData);
		// console.log("createWorkshopList -> workshopCardData", workshopCardData)

		return (
			<StyledArticle>
				<StyledImage src={data.fields.carousel_pictures[0].url} />

				<StyledButtonContainer>
					<StyledButton as={Link} to="/">
						<StyledCardTitle>{data.fields.title}</StyledCardTitle>
					</StyledButton>
				</StyledButtonContainer>
				<StyledWorkshopDetails>
					<StyledSpan>Time: {data.fields.table_of_contents}</StyledSpan>
					<StyledSpan>Comments: {data.fields.feedback.length}</StyledSpan>
					<StyledSpan>Rating: {data.fields.average_rating}</StyledSpan>
				</StyledWorkshopDetails>
				{/* <div>
						<li>reclXZv3JtH77KpzW</li>
					</div> */}
			</StyledArticle>
		);
	}

	return (
		<>
			<BGYellow>
				{error || ''}
				<Title1>Workshops</Title1>
			</BGYellow>
			<StyledMain>{allWorkshopData ? createWorkshopList() : <h1>Loading...</h1>}</StyledMain>
		</>
	);
}
