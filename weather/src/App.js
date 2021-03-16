import React, { Component } from 'react';
import WeatherMain from './Components/WeatherMain';
import './App.css';
import 'weather-icons/css/weather-icons.css';

class App extends Component {
  render() {
    return (
      <div>
        <WeatherMain/>
      </div>
    );
  }
}

export default App;