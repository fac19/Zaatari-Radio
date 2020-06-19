import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as vars from '../../../assets/styles/variables';

const TagText = styled.p`
	display: inline;
	font-family: ${vars.standardFont};
	font-style: normal;
	font-weight: 300;
	font-size: 12px;
	line-height: 14px;
	color: #ffffff;
	margin-left: 0.5rem;
	padding: 4px;
	background: ${vars.granite};
	border-radius: 10%;
`;

export default function Tag({ innerText, currentTags, setCurrentTags }) {
	function toggleTags() {
		if (!(currentTags && setCurrentTags && innerText)) {
			return;
		}
		if (currentTags.includes(innerText)) {
			const newTags = currentTags.filter((tag) => tag !== innerText);
			setCurrentTags(newTags);
			return;
		}
		setCurrentTags([...currentTags, innerText]);
	}

	return <TagText onClick={toggleTags}>{innerText}</TagText>;
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
