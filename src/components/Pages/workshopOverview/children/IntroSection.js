import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../../../../api/api';

import * as SC from '../style';

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
		<SC.Section>
			{authors.map((author) => (
				<>
					<SC.AuthorText>
						From : <SC.AuthorSpan>{author.Name}</SC.AuthorSpan>
					</SC.AuthorText>
					<SC.AuthorText>
						Organisation : <SC.AuthorSpan>{author.organisation}</SC.AuthorSpan>
					</SC.AuthorText>
				</>
			))}
			<SC.AuthorText>{equipment}</SC.AuthorText>
			{errorState}
		</SC.Section>
	);
}

Intro.propTypes = {
	authorArr: PropTypes.arrayOf(PropTypes.string).isRequired,
	equipment: PropTypes.string.isRequired,
};
