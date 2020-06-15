import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TitleBar from './TitleBar';
import * as SC from './style';

export default function WorkshopHeader({ images, date, tags, title }) {
	const image = images ? images[0]?.url : '';

	const ImgDiv = styled.div`
		background: url(${image});
		background-size: cover;
		min-height: 20vh;
	`;
	return (
		<SC.Header>
			<ImgDiv>
				<SC.Date>{date}</SC.Date>
				<SC.Tags>{tags}</SC.Tags>
			</ImgDiv>
			<TitleBar title={title} />
		</SC.Header>
	);
}

WorkshopHeader.propTypes = {
	images: PropTypes.arrayOf(PropTypes.object),
	date: PropTypes.string,
	tags: PropTypes.arrayOf(PropTypes.string),
	title: PropTypes.string,
};

WorkshopHeader.defaultProps = {
	images: false,
	date: '',
	tags: [],
	title: 'Workshop',
};
