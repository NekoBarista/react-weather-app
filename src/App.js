import './App.css';
import React from 'react';



function App() {

 
  return (
    <div className="App">    
     <h1>  Melbourne </h1>
     <p> Thursday, May 17th, 2022 </p>
     <p> 1.18am</p>
     <img src="https://cdn.icon-icons.com/icons2/2505/PNG/512/sunny_weather_icon_150663.png" alt="cloudy"/>
     <h2> 30° C / F </h2>
     <h3> Cloudy </h3>
     <form className="cityForm">
       <input type='text'placeholder="Enter a City" className="searchBox"></input> 
       <input type='submit' className="btn btn-primary" value="Search"></input>
     </form>
 
      <div className="smallText">
         Open Source Code by <a href='https://github.com/NekoBarista/react-weather-app'> Vicki Smith </a> 
      </div>
      </div>
  );
}
  


export default App;
