import React from 'react';

const getSeason = (lat, month) => {
  // months from 0 to 2 and from 9 to 11 defines winter for northern hemisphere (latitude > 0) and summer for southern hemisphere
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const text =
    season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
  // console.log(season);
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default SeasonDisplay;
