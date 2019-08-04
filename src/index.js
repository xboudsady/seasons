import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

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

  renderContent() {
    // If no latitude is available
    if (this.state.errorMessage && !this.state.lat) {           
      return <div>Error: { this.state.errorMessage } </div>
    }
    // If latitude is avaialable
    if (!this.state.errorMessage && this.state.lat) {           
      return <SeasonDisplay lat={ this.state.lat } />
    } 
    // Loading Screen
    return <Spinner message="Please accept location request." />;
  }

  // React says we have to define render!!
  render() {
      return (
        <div className="border red">
          {this.renderContent()}
        </div>
      )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));