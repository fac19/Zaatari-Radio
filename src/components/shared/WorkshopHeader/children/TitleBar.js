import React from 'react';
import PropTypes from 'prop-types';
import * as SC from '../style';

export default function TitleBar({ title }) {
	return (
		<SC.TitleContainer>
			<SC.WorkshopTitle>{title}</SC.WorkshopTitle>
		</SC.TitleContainer>
	);
}

TitleBar.propTypes = {
	title: PropTypes.string,
};

TitleBar.defaultProps = {
	title: false,
};
