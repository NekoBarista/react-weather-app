import './App.css';

function App() {
  return (
    <div className="App">    
     <h1>  Melbourne </h1>
     <p> Monday, 16th of May</p>
     <p> 16.20pm</p>
     <h2> 30°C</h2>
     <h3> Cloudy </h3>
     <form>
       <input type='text'placeholder="Enter a City" className="searchBox"></input> 
       <input type='submit' className="btn btn-primary" value="Search"></input>
     </form>
    </div>
  );
}

export default App;
