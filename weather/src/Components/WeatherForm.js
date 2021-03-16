import React from 'react';
import './WeatherForm.scss';

const WeatherForm = (props) => {
    return (
        <div className="form-container">
            <div>{props.error ? error() : null}</div>
            <form onSubmit={props.loadWeather} className="form-container__flex row">
                <div className="form-container__part">
                    <input 
                        type="text"
                        className="form-container__field"
                        name="city"
                        autoComplete="off"
                        placeholder="City" 
                    />
                </div>
                <div className="form-container__part">
                    <input 
                        type="text"
                        className="form-container__field"
                        name="country"
                        autoComplete="off"
                        placeholder="Country"
                    />
                </div>
                <div className="form-container__part">
                    <button className="form-container__btn">Current Weather</button>
                </div>
            </form>
        </div>
    );
};

function error(){
    return(
        <div>
            Please enter City and Country
        </div>
    )
}

export default WeatherForm;