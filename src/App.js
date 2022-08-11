import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';
import WeatherForecast from './WeatherForecast';


function App() {
 const [weatherData, setWeatherData] = useState({submit:false});
 const [city, SetCity] = useState("Melbourne, AU")
  

function handleSubmit(event){
event.preventDefault()
search()
}

function search() {
const apiKey= "9bf2efd0f6df71b36df66a55219d0c2d"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
axios.get(apiUrl).then(handleResponse)
}

function handleCitySearch(event) {
SetCity(event.target.value)
}

function handleResponse(response) {
setWeatherData(
  {submit: true,
    coordinates:response.data.coord,
    temperature:response.data.main.temp, 
    city:response.data.name, 
    description: response.data.weather[0].description, 
    icon: response.data.weather[0].icon,
  date: new Date(response.data.dt*1000)})
    
}

 
if(weatherData.submit) {
  return (
    <div className='container'>
       <div className='row justify-content-md-center'>
         <div className='col col-lg-3'>

         </div>
         <div className='col col-lg auto'>
         <div class="weatherInfo">
      <WeatherInfo data={weatherData}/>
      <WeatherForecast coordinates={weatherData.coordinates}/>
 </div>
     </div>    
     <div className='col col-lg-3'>
         </div>
         <div className='searchForm'>
         <div className='row justify-content-md-center form'>
         <form className="cityForm" onSubmit={handleSubmit}>
       <input type='text'placeholder="Enter a City" className="searchBox" onChange={handleCitySearch}></input> 
       <input type='submit' className="btn btn-primary" value="Search"></input>
     </form>
</div>
         </div>
    <div className='col col-lg-2'>
         </div>
      <div className="smallText">
         Open Source Code by <a href='https://github.com/NekoBarista/react-weather-app'> Vicki Smith </a> 
      </div>
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