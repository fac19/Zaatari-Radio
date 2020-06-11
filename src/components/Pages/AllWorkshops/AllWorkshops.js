import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Title1, BGYellow } from '../../../styles/componentsStyles';
// import api from '../../../api/api';

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
`;

const StyledImage = styled.img`
	width: 100%;
`;

const StyledCardTitle = styled.h2`
	font-family: DINCondensed;
	font-size: 30px;
	margin: 0;
	padding: 8px 0 5px 0;
`;

const StyledButton = styled.a`
	text-decoration: none;
`;

const StyledButtonContainer = styled.div`
	background: #ffcb74;
	margin: 0 40% 0 0.5rem;
`;

export default function AllWorkshops() {
	const allWorkshopData = true; // delete after styling complete.

	// const [allWorkshopData, setAllWorkshopData] = React.useState(true);
	// const [error, setError] = React.useState('');
	// React.useEffect(() => {
	// 	api
	// 		.getWorkshops()
	// 		.then((result) => {
	// 			// console.log(result)
	// 			// console.log("title", result.records[0].fields.title)
	// 			setAllWorkshopData(result.records);
	// 		})
	// 		.catch((err) => {
	// 			setError(err.details);
	// 		});
	// }, []);

	function createWorkshopList() {
		// console.log('createWorkshopList -> allWorkshopData', allWorkshopData);
		// const data = allWorkshopData[0];
		return (
			<StyledArticle>
				{/* <img src={data.fields.carousel_pictures[0].url} />
				<ul>
					<li>{data.fields.title}</li>
					<li>{data.fields.table_of_contents}</li>
					<li>{data.fields.average_rating}</li>
					<li>{data.fields.feedback.length}</li>
					<li>{data.id}</li>
				</ul> */}
				<StyledImage src="https://dl.airtable.com/.attachments/75768831999f01ca14c3f6930ce8bbb6/2be86799/WS1.PNG" />
				<ul>
					<StyledButtonContainer>
						<StyledButton as={Link} to="/">
							<StyledCardTitle>Workshop uno</StyledCardTitle>
						</StyledButton>
					</StyledButtonContainer>
					<li>3</li>
					<li>4</li>
					<li>6</li>
					<li>reclXZv3JtH77KpzW</li>
				</ul>
			</StyledArticle>
		);
	}

	return (
		<>
			<BGYellow>
				{/* {error || ''} */}
				<Title1>Workshops</Title1>
			</BGYellow>
			<StyledMain>{allWorkshopData ? createWorkshopList() : <h1>Loading...</h1>}</StyledMain>
		</>
	);
}
