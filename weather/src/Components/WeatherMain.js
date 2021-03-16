import React from 'react';

const WeatherMain = (props) => {
    return (
        <div className="offset-md-1 py-4">
            <div className="weather_card">
                <h1 className="weather__title">{props.city}</h1>
                <h4 className="weather__temp">{props.description}</h4>
                <h5 className="py-4">
                    <i className={`wi ${props.weatherIcon} display-1`}></i>
                </h5>
                <div>{props.feels_like ? <h2 className="weather__temp">Feels Like {props.feels_like}&deg;</h2> : null}</div>
                <div className="temp_celcius">{props.temp_celsius ? <h1 className="weather__temp">Current Temperature {props.temp_celsius}&deg;</h1> : null}</div>
                <div>{props.temp_min ? <h2 className="weather__temp">Minimum Temperature {props.temp_min}&deg;</h2> : null}</div>
                <div>{props.temp_max ? <h2 className="weather__temp">Maximum Temperature {props.temp_max}&deg;</h2> : null}</div>
                
            </div>
        </div>
    );
};

export default WeatherMain;