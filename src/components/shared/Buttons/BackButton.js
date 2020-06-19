import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as vars from '../../../assets/styles/variables'

const SC = {
	BlackButton: styled.button`
		background-color: ${vars.night};
		color: ${vars.offWhite};
		font-family: ${vars.standardFont};
		font-size: ${vars.smallButtonTextSize};
		padding: ${vars.smallButtonPadding};
		border-style: none;
		cursor: pointer;

		display: flex;
		align-items: center;
		text-align: center;

		transition: all 0.3s;
		top: 0px;
		left: 0px;

		&:hover {
			background: #78788c;
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

	return <SC.BlackButton onClick={handleClick}>Back</SC.BlackButton>;
}

BackButton.propTypes = {
	to: PropTypes.string.isRequired,
};
