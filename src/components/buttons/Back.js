import React from 'react';
// import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colours from '../../styles/colours';

const BlackButton = styled.button`
	background-color: ${colours.night};
	color: ${colours.offWhite};
	font-size: 1em;
	margin: 1em;
	height: 39px;
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
`;

export default function BackButton({ to }) {
	const history = useHistory();
	return (
		<BlackButton
			onClick={() => {
				history.push(to);
			}}
		>
			BACK
		</BlackButton>
	);
}

BackButton.propTypes = {
	to: PropTypes.string.isRequired,
};
