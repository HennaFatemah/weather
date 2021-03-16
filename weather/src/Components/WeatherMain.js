import React from 'react';
import './WeatherMain.scss';

const WeatherMain = (props) => {
    return (
        <div className="weather_card">
            <h1 className="weather__title">{props.city}</h1>
            <p className="weather__temp">{props.description}</p>
            <p className="weather__temp">
                <i className={`wi ${props.weatherIcon} weather__icon`}></i>
            </p>
            <div>{props.feels_like ? <p className="weather__temp">Feels Like {props.feels_like}&deg;</p> : null}</div>
            <div className="temp_celcius">{props.temp_celsius ? <h1 className="weather__temp">Current Temperature {props.temp_celsius}&deg;</h1> : null}</div>
            <div>{props.temp_min ? <p className="weather__temp">Minimum Temperature {props.temp_min}&deg;</p> : null}</div>
            <div>{props.temp_max ? <p className="weather__temp">Maximum Temperature {props.temp_max}&deg;</p> : null}</div>
            
        </div>
    );
};

export default WeatherMain;