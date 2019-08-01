import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {                                        // Creat our state, with two default properties
    super(props);

    // THIS IS THE ONLY TIME we do direct assignment
    // to this.state
    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(          // Browser API to get geolocation via the windows object
      (position) => {
        // we called setState!!
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {                                              // Error catching as second argument
        this.setState({ errorMessage: err.message })
      }
    );
  }

  // React says we have to define render!!
  render() {
      if (this.state.errorMessage && !this.state.lat) {           // If no latitude is available
        return <div>Error: { this.state.errorMessage } </div>
      }
      
      if (!this.state.errorMessage && this.state.lat) {           // If latitude is avaialable
        return <div>Latitude: { this.state.lat }</div>
      } 
      
      return <div>Loading!</div>                                  // Loading 
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));