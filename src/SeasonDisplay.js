import React from 'react';

// Return an Integer value, to determine if its witer or summer
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {
  // Grab the string value, based on go location to determine season
  const season = getSeason(props.lat, new Date().getMonth());
  const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';

  // If condition, to determine the value of the season variable from the getSesason()
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
};

export default SeasonDisplay;