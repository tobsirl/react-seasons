import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends Component {
  state = {
    lat: null,
    long: null,
    errorMessage: ''
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        }),
      err =>
        this.setState({
          errorMessage: err.message
        })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} long={this.state.long} />;
    }

    return (
      <div>
        <Spinner message="Please accept location request..." />{' '}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
