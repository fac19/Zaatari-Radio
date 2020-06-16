import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TitleBar from './TitleBar';
import Tag from '../Tag/Tag';
import * as SC from './style';

export default function WorkshopHeader({ images, date, tags, title }) {
	const image = images ? images[0]?.url : '';
	const ImgDiv = styled.div`
		background: url(${image});
		background-size: cover;
		min-height: 20vh;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		padding: 0.5rem;
	`;
	return (
		<SC.Header>
			<ImgDiv role="img">
				{date && (
					<SC.DateSpan>
						<Tag innerText={date} />
					</SC.DateSpan>
				)}
				{tags && (
					<SC.TagSpan>
						{tags.map((tag) => (
							<Tag innerText={tag} />
						))}
					</SC.TagSpan>
				)}
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
	images: [],
	date: '',
	tags: [],
	title: 'Workshop',
};
