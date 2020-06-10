import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BlueButton = styled(Button)`
	background-color: #4f8a8b;
	color: #f2f2f2;
`;

export default function OceanButton({ innerText, to }) {
	const history = useHistory();
	return (
		<BlueButton
			onClick={() => {
				history.push(to);
			}}
		>
			{innerText}
		</BlueButton>
	);
}

OceanButton.propTypes = {
	innerText: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
};
