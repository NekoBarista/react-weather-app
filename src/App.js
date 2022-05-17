import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
function App() {
 const [weatherData, setWeatherData] = useState({submit:false});
 const [submit, setSubmit] = useState(false);
  

function handleResponse(response) {
console.log(response.data)

setWeatherData(
  {submit: true,
    temperature:response.data.main.temp, 
    city:response.data.name, 
    description: response.data.weather[0].description, 
    iconUrl: "https://cdn.icon-icons.com/icons2/2505/PNG/512/sunny_weather_icon_150663.png" })

    setSubmit(true);
}

 
if(weatherData.submit) {
  return (
    <div className="App">    
     <h1>  {weatherData.city} </h1>
     <p> Thursday, May 17th, 2022 </p>
     <p> 1.18am</p>
     <img src={weatherData.iconUrl} alt="cloudy"/>
     <h2> {Math.round(weatherData.temperature)}° C / F </h2>
     <h3> {weatherData.description}</h3>
     <form className="cityForm">
       <input type='text'placeholder="Enter a City" className="searchBox"></input> 
       <input type='submit' className="btn btn-primary" value="Search"></input>
     </form>
 
      <div className="smallText">
         Open Source Code by <a href='https://github.com/NekoBarista/react-weather-app'> Vicki Smith </a> 
      </div>
      </div>
  );}
else {
  let city = "Melbourne, Au"
const apiKey= "9bf2efd0f6df71b36df66a55219d0c2d"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
axios.get(apiUrl).then(handleResponse)

return (
  <div>
    Loading...
  </div>
)


}
}
  


export default App;
