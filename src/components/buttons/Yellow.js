import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colours from '../../styles/colours';

const YellowButton = styled.button`
	background-color: ${colours.sand};
	color: ${colours.night};
	font-size: 1em;
	height: 43px;
	border-style: none;
	font-family: Roboto;
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
`;

export default function SandButton({ innerText, to }) {
	const history = useHistory();
	return (
		<YellowButton
			onClick={() => {
				history.push(to);
			}}
		>
			{innerText}
		</YellowButton>
	);
}

SandButton.propTypes = {
	innerText: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
};
