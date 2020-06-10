import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function BackButton({ to }) {
	const history = useHistory();
	return (
		<Button
			variant="contained"
			color="primary"
			href="#contained-buttons"
			onClick={() => {
				history.push(to);
			}}
		>
			Home
		</Button>
	);
}

BackButton.propTypes = {
	to: PropTypes.string.isRequired,
};
