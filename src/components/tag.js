import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
	height: 18px;
	align-items: center;
	background: #322f2f;
	padding: 0 1em 0 1em;
`;

const TagText = styled.p`
	font-family: Roboto;
	font-style: normal;
	font-weight: 300;
	font-size: 12px;
	line-height: 14px;
	display: flex;
	align-items: center;
	color: #ffffff;
`;

export default function Tag({ innerText, currentTags, setCurrentTags }) {
	function toggleTags() {
		if (!(currentTags && setCurrentTags)) {
			return;
		}
		if (currentTags.includes(innerText)) {
			const newTags = currentTags.filter((tag) => tag !== innerText);
			setCurrentTags(newTags);
			return;
		}
		setCurrentTags([...currentTags, innerText]);
	}

	return (
		<Container onClick={toggleTags}>
			<TagText>{innerText}</TagText>
		</Container>
	);
}

Tag.propTypes = {
	innerText: PropTypes.string.isRequired,
	currentTags: PropTypes.arrayOf(PropTypes.string),
	setCurrentTags: PropTypes.func,
};
Tag.defaultProps = {
	currentTags: false,
	setCurrentTags: false,
};
