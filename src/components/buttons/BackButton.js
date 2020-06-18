import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as vars from '../../styles/variables';

const SC = {
	BlackButton: styled.button`
		background-color: ${vars.night};
		color: ${vars.offWhite};
		font-size: 1em;
		height: ${vars.smallButtonHeight};
		border-style: none;
		text-transform: uppercase;

		font-family: ${vars.standardFont};
		font-style: normal;
		font-weight: 300;
		font-size: 16px;
		line-height: 19px;

		display: flex;
		align-items: center;
		text-align: center;

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

export default function BackButton({ to }) {
	const history = useHistory();

	function handleClick() {
		history.push(to);
	}

	return <SC.BlackButton onClick={handleClick}>BACK</SC.BlackButton>;
}

BackButton.propTypes = {
	to: PropTypes.string.isRequired,
};
