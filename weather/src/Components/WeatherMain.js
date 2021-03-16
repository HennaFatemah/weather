import React from 'react';

const WeatherMain = (props) => {
    return (
        <div>
            <div>
                <h1 className="weather__title">{props.city}</h1>
                <p>{props.description}</p>
                <p>
                    <i className={`wi ${props.weatherIcon} display-1`}></i>
                </p>
                <div>{props.feels_like ? <p>Feels Like {props.feels_like}&deg;</p> : null}</div>
                <div>{props.temp_celsius ? <p>Current Temperature {props.temp_celsius}&deg;</p> : null}</div>
                <div>{props.temp_min ? <p>Minimum Temperature {props.temp_min}&deg;</p> : null}</div>
                <div>{props.temp_max ? <p>Maximum Temperature {props.temp_max}&deg;</p> : null}</div>
                
            </div>
        </div>
    );
};

export default WeatherMain;