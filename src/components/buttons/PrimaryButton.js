import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as vars from '../../styles/variables';

const SC = {
	PrimaryButton: styled.button`
		background-color: ${vars.ocean};
		color: ${vars.offWhite};
		font-size: 1em;
		height: ${vars.smallButtonHeight};
		border-style: none;
		font-family: ${vars.standardFont};
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 19px;

		display: flex;
		align-items: center;
		text-align: center;
		padding: 0 0.8em 0 0.8em;

		cursor: pointer;

		transition: all 0.3s;
		top: 0px;
		left: 0px;

		&:hover {
			box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
			position: relative;
			top: -2px;
			left: -2px;
		}
	`,
};

export default function PrimaryButton({ innerText, to }) {
	const history = useHistory();

	function handleClick() {
		history.push(to);
	}

	return <SC.PrimaryButton onClick={handleClick}>{innerText}</SC.PrimaryButton>;
}

PrimaryButton.propTypes = {
	innerText: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
};
