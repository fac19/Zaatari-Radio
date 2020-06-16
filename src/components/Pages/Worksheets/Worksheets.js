import React from 'react';
import PropTypes from 'prop-types';
import WorkshopHeader from '../../WorkshopHeader/WorkshopHeader';
import BackButton from '../../buttons/BackButton';
import dummyData from './dummyData';
import StyledLink from './style';

const downloadAll = (links) => {
	links.forEach((link) => {
		window.open(link.url);
	});
};

function DownloadLink({ url, innerText }) {
	return <StyledLink href={url}>{innerText}</StyledLink>;
}

export default function Worksheets({ match: { params } }) {
	console.log(params);
	return (
		<>
			<WorkshopHeader />
			<BackButton />
			<h2>Worksheets</h2>
			{dummyData.map((worksheet) => (
				<DownloadLink url={worksheet.url} innerText={worksheet.filename} />
			))}
			<StyledLink onClick={() => downloadAll(dummyData)}>Download all</StyledLink>
		</>
	);
}

DownloadLink.propTypes = {
	url: PropTypes.string.isRequired,
	innerText: PropTypes.string.isRequired,
};

Worksheets.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			ID: PropTypes.string,
		}),
	}).isRequired,
};
