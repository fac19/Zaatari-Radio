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
		margin: 1em;
		height: ${vars.smallButtonHeight};
		border-style: none;
		text-transform: uppercase;

		font-family: Roboto;
		font-style: normal;
		font-weight: 300;
		font-size: 16px;
		line-height: 19px;

		display: flex;
		align-items: center;
		text-align: center;
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
