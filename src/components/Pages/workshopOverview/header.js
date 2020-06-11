import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Header({ images }) {
	console.log('Header -> images', images);
	const image = images ? images[0]?.url : '';

	const Container = styled.header`
		background: url(${image});
		min-height: 20vh;
	`;
	return <Container>Tags</Container>;
}

Header.propTypes = {
	images: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
	images: false,
};
