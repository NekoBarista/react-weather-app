import React from "react";
import DisplayDate from "./DisplayDate"
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

export default function WeatherInfo(props){
    return (
        <div className="App">    
        <h1>  {props.data.city} </h1>
        <DisplayDate date={props.data.date}/>
       <WeatherIcon code={props.data.icon} alt={props.data.description} />
        <Temperature celsius={props.data.temperature} />
        <h5> {props.data.description}</h5>
        </div> )
        }