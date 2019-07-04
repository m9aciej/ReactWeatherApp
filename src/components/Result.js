import React from 'react';
import './Result.css' // import pliku css
const Result = (props) => {
    //destrukturyzacja
    
    const {error,city,temp,pressure,wind,date,sunrise,sunset} = props.weather;
    let content = null;
    if(!error && city){
        content = (
            <React.Fragment>
                <h4>Pogoda dla: {city}</h4>
                <h4>Temperatura: {temp} &#176;C</h4>
                <h4>Ciśnienie: {pressure} hPa</h4>
                <h4>Wiatr: {wind} m/s</h4>
                <h4>Wschód słońca: {new Date(sunrise * 1000).toLocaleTimeString()}</h4>
                <h4>Zachód słońca: {new Date(sunset * 1000).toLocaleTimeString()}</h4>
                <h4>Dzień i godzina: {date}</h4>
            </React.Fragment>
        )
    }
    return(
        <div className="result">
            {error ? `nie znaleziono miasta: ${city}` : content}
        </div>

        // <React.Fragment>
        //     {error ? `nie znaleziono miasta: ${city}` : content}
        //     <div>Pogoda dla: {city}</div>
        //     <div>Temperatura: {temp}</div>
        //     <div>Ciśnienie: {pressure}</div>
        //     <div>Wiatr: {wind}</div>
        //     <div>{String(props.weather.error)}</div> 
        // </React.Fragment>
    );
}
export default Result;