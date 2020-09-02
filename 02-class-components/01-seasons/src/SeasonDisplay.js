import React from 'react';

const seasonConfig = {
  summer: { text: "Let's hit the beach!", iconName: 'sun' },
  winter: { text: 'Burr, it is chilly!', iconName: 'snowflake' },
};

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
  // example of ternary expression, result is put to text var
  // const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
  // get name of font-awesome icon that correspond with season
  // const icon = season === 'winter' ? 'snowflake' : 'sun';

  // refactor using seasonConfig:
  const { text, iconName } = seasonConfig[season]; // { text, iconName }

  // console.log(season);
  return (
    <div>
      <i className={`${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
