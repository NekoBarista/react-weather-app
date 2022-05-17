import React, { useState } from "react"

export default function Temperature(props) {

function convertToFahrenheit(event) {
    event.preventDefault()
    setUnits("imperial")
}

function convertToCelsius(event){
    event.preventDefault()
    setUnits("metric")
}
    let [units, setUnits]= useState("metric")
    if (units==="metric")
    return (
<h2> 
    {Math.round(props.celsius)}° C / <a href="#" onClick={convertToFahrenheit}>F</a>  
</h2>
    )
else
return (
    <h2> 
    {Math.round(props.celsius*9)/5+32}° <a href="#" onClick={convertToCelsius}>C</a> / F  
</h2>
)
}
