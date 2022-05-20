import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {

    function formatDay() {
        let date = new Date(props.data.dt*1000);
        let day = date.getDay()
let days =["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"]

        return days[day];

    }
    return (
    <div>
    <div className="forecastDay">{formatDay()}</div>
    <WeatherIcon code={props.data.weather[0].icon} size={32}/>
   <div className="forecastTemperature"> <span className="forecastMax"> {Math.round(props.data.temp.max)}° </span> <span className="forecastMin"> {Math.round(props.data.temp.min)}°</span> 
   </div>
   </div> )
}
