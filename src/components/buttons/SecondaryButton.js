import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as vars from '../../styles/variables';

const SC = {
	SecondaryButton: styled.button`
		background-color: ${vars.olive};
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
	`,
};

export default function OliveButton({ innerText, to }) {
	const history = useHistory();
	return (
		<SC.SecondaryButton
			onClick={() => {
				history.push(to);
			}}
		>
			{innerText}
		</SC.SecondaryButton>
	);
}

OliveButton.propTypes = {
	innerText: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
};
