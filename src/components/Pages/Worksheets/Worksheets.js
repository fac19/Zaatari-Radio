import React from 'react';
import PropTypes from 'prop-types';
import GetAppIcon from '@material-ui/icons/GetApp';
import WorkshopHeader from '../../WorkshopHeader/WorkshopHeader';
import BackButton from '../../buttons/BackButton';
import SC from './style';
import useSpecificWorkshop from '../../../hooks/useSpecificWorkshop';

const downloadAll = (links) => {
	links.forEach((link) => {
		window.open(link.url);
	});
};

function DownloadLink({ url, innerText, fn }) {
	return (
		<SC.LinkBox>
			<SC.StyledLink onClick={fn} href={url}>
				{innerText}
			</SC.StyledLink>
			<SC.IconBox href={url} onClick={fn}>
				<GetAppIcon />
			</SC.IconBox>
		</SC.LinkBox>
	);
}

export default function Worksheets({ match: { params } }) {
	const [errorState, setErrorState] = React.useState('');
	const [workshop, setWorkshop] = React.useState({});
	useSpecificWorkshop(params.ID, setWorkshop, setErrorState);

	const worksheets = workshop.worksheets || [];
	const content = [
		worksheets.map((worksheet) => <DownloadLink url={worksheet.url} innerText={worksheet.filename} />),
		<DownloadLink fn={() => downloadAll(worksheets)} innerText="Download all" />,
	];
	return (
		<>
			<WorkshopHeader images={workshop.images} date={workshop.date_created} tags={workshop.tags} title={workshop.title} />
			<BackButton to={`/workshop/content/${params.ID}`} />
			<SC.PageTitle>Worksheets</SC.PageTitle>
			{errorState || content}
		</>
	);
}

DownloadLink.propTypes = {
	url: PropTypes.string.isRequired,
	innerText: PropTypes.string.isRequired,
	fn: PropTypes.func.isRequired,
};

Worksheets.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			ID: PropTypes.string,
		}),
	}).isRequired,
};
