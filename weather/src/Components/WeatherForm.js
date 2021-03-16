import React from 'react';

const WeatherForm = (props) => {
    return (
        <div>
            <div>{props.error ? error() : null}</div>
            <form onSubmit={props.loadweather}>
                <div>
                    <input 
                        type="text"
                        className="form-container__field"
                        name="city"
                        autoComplete="off"
                        placeholder="City" 
                    />
                </div>
                <div>
                    <input 
                        type="text"
                        className="form-container__field"
                        name="country"
                        autoComplete="off"
                        placeholder="Country"
                    />
                </div>
                <div>
                    <button>Current Weather</button>
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