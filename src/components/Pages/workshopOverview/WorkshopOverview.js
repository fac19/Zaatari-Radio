import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import api from '../../../api/api';
import getFromJSON from './getFromJSON';

import Intro from './TitleSection';
import Main from './MainSection';
import Header from './header';
import Comments from './Comments';

import BackButton from '../../buttons/BackButton';

export default function WorkshopOverview({ match: { params } }) {
	const [errorState, setErrorState] = React.useState('');
	const [workshop, setWorkshop] = React.useState({});
	// console.log(params);
	useEffect(() => {
		api
			.getSpecificWorkshop(params.ID)
			.then((res) => {
				setWorkshop(getFromJSON(res));
			})
			.catch((err) => {
				console.log(err);
				setErrorState(
					<h2>
						<br />
						<br />
						This workshop couldnt be found
					</h2>,
				);
			});
	}, [params.ID]);

	return (
		<>
			<Header images={workshop.images} />
			<Intro title={workshop.title} author={workshop.workshop_authors} equipment={null} />
			<Main
				content={`This is workshop text that needs inserting from the airtable and is currently 
		  about Covid 19 and how we can prevent the spread of the virus in Zataari. It is recorded 
		  in Arabic and has written worksheets download`}
			/>
			<Comments />
			<BackButton />
			{errorState}
		</>
	);
}

WorkshopOverview.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			ID: PropTypes.string,
		}),
	}).isRequired,
};

/*
<>
      Header
        Image Background

     section
     Div
        H1
     Author
     Equipment || Null

     section
        H2
         P
     Div
        Button
        Button


    section
       H2
       Article
          P
          Div
             P

</>
*/
