import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer ☀️' : 'winter ❄️';
  } else {
    return lat < 0 ? 'winter ❄️' : 'summer ☀️';
  }
};

const SeasonDisplay = ({ lat, long }) => {
  const season = getSeason(lat, new Date().getMonth());
  const text =
    season === 'winter' ? `Lets hit the beach! ☀️` : `Burr, it's chilly! ❄️`;

  return <div>{text}</div>;
};

export default SeasonDisplay;
