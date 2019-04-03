import React from 'react';

const SeasonDisplay = ({ lat, long }) => {
  return (
    <div>
      Latitude: {lat} <br />
      Longitude: {long}
    </div>
  );
};

export default SeasonDisplay;
