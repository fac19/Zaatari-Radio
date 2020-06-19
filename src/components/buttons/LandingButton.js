import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as vars from '../../styles/variables';

const SC = {
	LandingButton: styled.button`
		background-color: ${vars.sand};
		color: ${vars.night};
		font-size: ${vars.medButtonTextSize};
		font-family: ${vars.standardFont};

		display: flex;
		margin: 45px auto;
		padding: ${vars.medButtonPadding};
		cursor: pointer;
		border-style: none;

		transition: all 0.3s;
		top: 0px;
		left: 0px;

		&:hover {
			background: ${vars.night};
			color: ${vars.sand};
			box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
			position: relative;
			top: -2px;
			left: -2px;
		}
	`,
};

export default function LandingButton({ innerText, to }) {
	const history = useHistory();

	function handleClick() {
		history.push(to);
	}

	return <SC.LandingButton onClick={handleClick}>{innerText}</SC.LandingButton>;
}

LandingButton.propTypes = {
	innerText: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
};
