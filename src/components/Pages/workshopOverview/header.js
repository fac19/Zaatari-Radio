import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ images }) {
  console.log('Header -> images', images);
  const image = images ? images[0]?.url : '';
  //   const image = images[0]?.url;
  //   const image = '';
  return (
    <header>
      Hello world
      <img alt="temporary" src={image} />
      <br />
      <br />
    </header>
  );
}

Header.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  images: false,
};
