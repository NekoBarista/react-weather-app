import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';


function App() {
 const [weatherData, setWeatherData] = useState(null);
 const [submit, setSubmit] = useState(false);
 const [city, SetCity] = useState("Melbourne")
  

function handleSubmit(event){
event.preventDefault()
}

function search() {
const apiKey= "9bf2efd0f6df71b36df66a55219d0c2d"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
axios.get(apiUrl).then(handleResponse)

}

function handleCitySearch(event) {
SetCity(event.target.value)
search()
}




function handleResponse(response) {
setWeatherData(
  {
    temperature:response.data.main.temp, 
    city:response.data.name, 
    description: response.data.weather[0].description, 
    iconUrl: "https://cdn.icon-icons.com/icons2/2505/PNG/512/sunny_weather_icon_150663.png",
  date: new Date(response.data.dt*1000)})
    setSubmit(true);
}

 
if(submit) {
  return (
    <div>
      <WeatherInfo data={weatherData}/>
     <form className="cityForm" onSubmit={handleSubmit}>
       <input type='text'placeholder="Enter a City" className="searchBox" onChange={handleCitySearch}></input> 
       <input type='submit' className="btn btn-primary" value="Search"></input>
     </form>
      <div className="smallText">
         Open Source Code by <a href='https://github.com/NekoBarista/react-weather-app'> Vicki Smith </a> 
      </div>
      </div>
  );}
else {

  search()
return (
  <div>
  
    Loading...
  </div>
)


}
}
  


export default App;
