import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css"
import WeatherForecastDay
 from "./WeatherForecastDay";
export default function WeatherForecast(props) {
    const [ready,setReady]= useState(false);
    const [forecastData, setforecastData] = useState()

    function handleResponse(response) {
        setforecastData(response.data.daily);
        setReady(true);
    }

   useEffect (() => {
     setReady(false)
   }, [props.coordinates]);


   
    if (ready) {
        return (
          <div className="WeatherForecast">
            <div className="row g-0">
              {forecastData.map(function (dailyForecast, index) {
                if (index < 4) {
                  return (
                    <div className="col col-sm" key={index}>
                      <WeatherForecastDay data={dailyForecast} />
                    </div>
                  );
                  
                }

                else {return null}
              })}
            </div>
          </div>
        );
      } 
      
      else {
        let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);
    
        return null;
      }
    }