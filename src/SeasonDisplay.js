import React from 'react';

// Configuration Object -- to return string value to use in return calls
const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun'
  },
  winter: {
    text: 'Burr it is cold!',
    iconName: 'snowflak'
  },
};


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
  
  // Deconstruct our key name from object
  const { text, iconName } = seasonConfig[season]  // Return our object with the { text, iconName }


  // If condition, to determine the value of the season variable from the getSesason()
  return (
    <div>
      <i className={`${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon`} />
    </div>
  )
};

export default SeasonDisplay;