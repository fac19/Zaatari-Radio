import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../../../api/api';
import getFromJSON from './getFromJSON';
import Intro from './TitleSection';

import Header from './header';

export default function WorkshopOverview({ match: { params } }) {
  const [errorState, setErrorState] = React.useState('');
  const [workshop, setWorkshop] = React.useState({});

  useEffect(() => {
    api
      .getSpecificWorkshop(params.id)
      .then((res) => {
        setWorkshop(getFromJSON(res));
        return res;
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
        // Think we are setting state here with the err message
        return err;
      });
  }, [params.id]);

  return (
    <>
      <Header images={workshop.images} />
      <Intro title={workshop.title} author={workshop.workshop_authors} equipment={null} />

      {workshop.title || ''}
      {errorState}
    </>
  );
}

WorkshopOverview.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
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