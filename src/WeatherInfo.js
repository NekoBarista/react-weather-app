import React from "react";
import DisplayDate from "./DisplayDate"
import WeatherIcon from "./WeatherIcon";
export default function WeatherInfo(props){
    return (
        <div className="App">    
        <h1>  {props.data.city} </h1>
        <p> <DisplayDate date={props.data.date}/> </p>
       <WeatherIcon code={props.data.icon} alt={props.data.description} />
        <h2> {Math.round(props.data.temperature)}° C / F </h2>
        <h5> {props.data.description}</h5>
        </div> )}