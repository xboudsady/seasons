import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(          // Browser API to get geolocation via the windows object
      position => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log('My component was just updated - it rerendered.')
  }

  // React says we have to define render!!
  render() {
      if (this.state.errorMessage && !this.state.lat) {           // If no latitude is available
        return <div>Error: { this.state.errorMessage } </div>
      }
      
      if (!this.state.errorMessage && this.state.lat) {           // If latitude is avaialable
        return <SeasonDisplay lat={ this.state.lat } />
      } 
      
      return <div>Loading!</div>                                  // Loading 
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));