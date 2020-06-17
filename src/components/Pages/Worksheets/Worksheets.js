import React from 'react';
import PropTypes from 'prop-types';
import WorkshopHeader from '../../WorkshopHeader/WorkshopHeader';
import BackButton from '../../buttons/BackButton';
import StyledLink from './style';
import useSpecificWorkshop from '../../../hooks/useSpecificWorkshop';

const downloadAll = (links) => {
	links.forEach((link) => {
		window.open(link.url);
	});
};

function DownloadLink({ url, innerText }) {
	return <StyledLink href={url}>{innerText}</StyledLink>;
}

export default function Worksheets({ match: { params } }) {
	const [, setErrorState] = React.useState('');
	const [workshop, setWorkshop] = React.useState({});
	useSpecificWorkshop(params.ID, setWorkshop, setErrorState);

	const worksheets = workshop.worksheets || [];
	return (
		<>
			<WorkshopHeader />
			<BackButton />
			<h2>Worksheets</h2>
			{worksheets.map((worksheet) => (
				<DownloadLink url={worksheet.url} innerText={worksheet.filename} />
			))}
			<StyledLink onClick={() => downloadAll(worksheets)}>Download all</StyledLink>
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
