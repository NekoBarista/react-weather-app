import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
let [city, setCity] = useState("Melbourne");
let [submit,setSubmit] = useState(false);
let [display, setDisplay] =useState(false);
  
function searchCity(event) {
  setSubmit(false);
  setCity(event.target.value);   

  }

  function displayWeather(event) {
    event.preventDefault();
    getWeather()

  }
  
  function showWeather(response){
    setSubmit(true);
    setDisplay(response.data.name)
  }
  function getWeather() {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9bf2efd0f6df71b36df66a55219d0c2d
  `;
  axios.get(url).then(showWeather);}

  return (
    <div className="App">    
     <h1>  {display} </h1>
     <p> Monday, 16th of May</p>
     <p> 16.20pm</p>
<img src="https://cdn.icon-icons.com/icons2/2505/PNG/512/sunny_weather_icon_150663.png" alt="sunny icon"/>
     <h2> 30°C</h2>
     <h3> Cloudy </h3>
     <form className="cityForm" onSubmit={displayWeather}>
       <input type='text'placeholder="Enter a City" className="searchBox" onChange={searchCity}></input> 
       <input type='submit' className="btn btn-primary" value="Search"></input>
     </form>
 
      <div className="smallText">
         Open Source Code by <a href='https://github.com/NekoBarista/react-weather-app'> Vicki Smith </a> 
      </div>
      </div>
  
  

  );
}

export default App;
