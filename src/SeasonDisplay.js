import './SeasonDisplay.css';   // Load our CSS stylesheet for our icons
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
  // Grab the string value, based on go location to determine season of 'summer' or 'winter'
  const season = getSeason(props.lat, new Date().getMonth());
  
  // De-construct our key name from object
  const { text, iconName } = seasonConfig[season]  // Return our object with the { text, iconName }


  // If condition, to determine the value of the season variable from the getSesason()
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  )
};

export default SeasonDisplay;