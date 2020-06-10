import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BlackButton = styled(Button)`
	background-color: #07031a;
	color: #f2f2f2;
`;

export default function BackButton({ to }) {
	const history = useHistory();
	return (
		<BlackButton
			onClick={() => {
				history.push(to);
			}}
		>
			Back
		</BlackButton>
	);
}

BackButton.propTypes = {
	to: PropTypes.string.isRequired,
};
