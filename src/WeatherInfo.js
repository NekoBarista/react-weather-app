import React from "react";
import "./weatherinfo.css"
import DisplayDate from "./DisplayDate"
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

export default function WeatherInfo(props){
    return (
        <div className="App">    
        <h1>  {props.data.city} </h1>
        <DisplayDate date={props.data.date}/>
       <WeatherIcon code={props.data.icon} />
        <Temperature celsius={props.data.temperature} />
        <h6> {props.data.description}</h6>
        </div> )
        }