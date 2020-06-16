import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as vars from '../../../styles/variables';
// import vars from '../../../styles';
import api from '../../../api/api';

const Section = styled.section``;

const Author = styled.p`
	font-family: ${vars.standardFont};
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
	font-family: ${vars.standardFont};
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 16px;
	display: flex;
	align-items: center;
	text-align: right;
`;

export default function Intro({ authorArr, equipment }) {
	const [authors, setAuthors] = useState([]);
	const [errorState, setErrorState] = React.useState('');

	useEffect(() => {
		if (authorArr) {
			const newAuthor = authorArr.map((record) => {
				return api
					.getSpecificAuthor(record)
					.then((res) => {
						return res.fields;
					})
					.catch(() => {
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
	authorArr: PropTypes.arrayOf(PropTypes.string).isRequired,
	equipment: PropTypes.string.isRequired,
};
