import React from 'react';
import PropTypes from 'prop-types';

const InfoBoxContent = ({ name, address }) => {
  return (
    <div className='infoBox__container'>
      <h2>{ name }</h2>
      <p>{ address }</p>
    </div>
  );
};

InfoBoxContent.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default InfoBoxContent;