import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as vars from '../../styles/variables';

const SC = {
	LandingButton: styled.button`
		background-color: ${vars.sand};
		color: ${vars.night};
		font-size: 1em;
		height: ${vars.medButtonHeight};
		border-style: none;
		font-family: ${vars.standardFont};
		font-style: normal;
		font-weight: 300;
		font-size: 21.216px;
		line-height: 25px;
		width: auto;
		display: flex;
		align-items: center;
		text-align: center;
		padding: 0 0.8em 0 0.8em;
		margin: 45px auto;
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
