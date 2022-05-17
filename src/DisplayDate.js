import React from "react";

function DisplayDate(props) {
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      
      let day = days[props.date.getDay()];
      let hours = props.date.getHours();
    let minutes = props.date.getminutes();
    if (minutes < 10) {minutes = `0${minutes}`};
    if (minutes < 10) {hours = `0${hours}`};
    return( 
    <h3> {day}, {hours}:{minutes} </h3>
)
}

export default DisplayDate