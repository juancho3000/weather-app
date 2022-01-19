import React from 'react';
import './App.css';
import Weather from './app_component/weather.component';
import Form from './app_component/form.component';


//api call
const API_key = "36f9a175d9c4096f8585a4df81f68181"

class App extends React.Component{
  constructor(){
    super();
    this.state={
      city: undefined,
      country:undefined,
      main:undefined,
      celsius:undefined,
      temp_max:undefined,
      temp_min:undefined,
      description:"",
      error:false
    };
    this.getWeather();

  }

  //calculation to pass Fahrenheit to Celsius
  calcFhrToCel(temp){
    let cell= Math.floor(temp -32 *5 /9);
    return cell;
  }

  getWeather= async () =>{
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=caracas&appid=36f9a175d9c4096f8585a4df81f68181`
    );
    const response = await api_call.json();
    console.log(response);

      this.setState({
        city:response.name,
        country:response.sys.country,
        temp:this.calcFhrToCel(response.main.temp),
        description:response.weather[0].main.description
      });
  };

  render(){
    return(
      <div className='app'>
        <Form/>
        <Weather
        city={this.state.city}
        country={this.state.country}
        temp={this.state.temp}
        decription={this.state.description}
        />
      </div>
    );
  }
}
/*
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <input type="text" className="form-control" name="city" placeholder='type city name'  autoComplete="off" />
        </div>

      
        <div className='row'>
        <div className="col-md-3">
          <button className="btn-warning">Get weather for your location</button>
        </div>
        </div>
      </div>
    </div>

 );
}
*/


export default App;
