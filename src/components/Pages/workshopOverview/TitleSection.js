import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import vars from '../../../styles';
import api from '../../../api/api';

const Section = styled.section``;

const TitleContainer = styled.div`
	background: ${vars.sand};
	display: flex;
`;

const WorshopTitle = styled.h1`
	position: relative;
	font-family: DIN Condensed;
	font-style: normal;
	font-weight: bold;
	font-size: 45px;
	line-height: 54px;
	display: flex;
	align-items: center;
	text-transform: uppercase;
	color: ${vars.night};
	margin: 0 auto;
	top: 0.4rem;
`;

const Author = styled.p`
	font-family: Roboto;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 16px;
	display: flex;
	align-items: center;
	text-align: right;
`;

const AuthorSpan = styled.span`
	margin-left: 0.5rem;
	font-family: Roboto;
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 16px;
	display: flex;
	align-items: center;
	text-align: right;
`;

export default function Intro({ title, authorArr, equipment }) {
	const [authors, setAuthors] = useState([]);
	const [errorState, setErrorState] = React.useState('');

	useEffect(() => {
		if (authorArr) {
			const newAuthor = authorArr.map((record) => {
				return api
					.getSpecificAuthor(record)
					.then((res) => {
						console.log(res);
						return res.fields;
					})
					.catch((err) => {
						console.log(err);
						setErrorState(
							<h2>
								<br />
								<br />
								Authors couldnt be found
							</h2>,
						);
					});
			});
			Promise.all(newAuthor).then((res) => setAuthors(res));
		}
	}, [authorArr]);

	return (
		<Section>
			<TitleContainer>
				<WorshopTitle>{title}</WorshopTitle>
			</TitleContainer>
			{authors.map((author) => (
				<>
					<Author>
						From : <AuthorSpan>{author.Name}</AuthorSpan>
					</Author>
					<Author>
						Organisation : <AuthorSpan>{author.organisation}</AuthorSpan>
					</Author>
				</>
			))}
			<Author>{equipment}</Author>
			{errorState}
		</Section>
	);
}

Intro.propTypes = {
	title: PropTypes.string.isRequired,
	authorArr: PropTypes.arrayOf(PropTypes.string).isRequired,
	equipment: PropTypes.string.isRequired,
};
