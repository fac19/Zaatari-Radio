import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GreyButton = styled(Button)`
	background-color: #b1b493;
	color: #f2f2f2;
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
