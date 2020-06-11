import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tags = styled.span`
	max-width: 75%;
`;

const Date = styled.span`
	max-width: 25%;
`;

export default function Header({ images, date, tags }) {
	const image = images ? images[0]?.url : '';

	const Container = styled.header`
		background: url(${image});
		min-height: 20vh;
	`;
	return (
		<Container>
			<Date>{date}</Date>
			<Tags>{tags}</Tags>
		</Container>
	);
}

Header.propTypes = {
	images: PropTypes.arrayOf(PropTypes.object),
	date: PropTypes.string,
	tags: PropTypes.arrayOf(PropTypes.string),
};

Header.defaultProps = {
	images: false,
	date: '',
	tags: [],
};
