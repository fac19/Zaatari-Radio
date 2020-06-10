import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GreyButton = styled.button`
	background-color: #b1b493;
	color: #f2f2f2;
	font-size: 1em;
	margin: 1em;
	height: 39px;
	border-style: none;
	font-family: Roboto;
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;

	display: flex;
	align-items: center;
	text-align: center;
	padding: 0 0.8em 0 0.8em;
`;

export default function OliveButton({ innerText, to }) {
	const history = useHistory();
	return (
		<GreyButton
			onClick={() => {
				history.push(to);
			}}
		>
			{innerText}
		</GreyButton>
	);
}

OliveButton.propTypes = {
	innerText: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
};
