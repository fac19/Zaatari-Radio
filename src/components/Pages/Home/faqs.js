import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import vars from '../../../styles';

const Pair = styled.article`
	max-width: 500px;
	margin: 0 auto 2em auto;
`;

function FAQ({ q, a }) {
	return (
		<Pair>
			<p>Q: {q}</p>
			<p>A: {a}</p>
		</Pair>
	);
}

const Section = styled.section`
	background-color: ${vars.offWhite};
	font-family: Roboto;
`;

const Title = styled.h2`
	max-width: 500px;
	margin: 0 auto;
`;

export default function FAQs() {
	return (
		<Section>
			<Title>FAQs</Title>
			<FAQ q="How do I view workshop resources?" a="Navigate to the workshops and browse away" />
			<FAQ q="How can I get involved?" a="You can get in contact at 123@email.com" />
			<FAQ q="How can I contribute to the workshops?" a="You can get in contact at 123@email.com" />
		</Section>
	);
}

FAQ.propTypes = {
	a: PropTypes.string.isRequired,
	q: PropTypes.string.isRequired,
};
