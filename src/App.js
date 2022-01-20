import React from 'react';
import './App.css';
import Weather from './app_component/weather.component';
import Form from './app_component/form.component';
//import Button from './app_component/button.component';


//api call
const API_key = "36f9a175d9c4096f8585a4df81f68181";

class App extends React.Component{
  constructor(){
    super();
    this.state={
      city: undefined,
      country:undefined,
      main:undefined,
      celsius:undefined,
      description:"",
      error:false
    };
    //this.getWeather();

  }

  //calculation to pass Fahrenheit to Celsius
  calcFhrToCel(temp){
    let cell= Math.floor(temp -273.15);
    return cell;
  }

  getWeather = async (e) => {

    e.preventDefault();

    const city = e.target.elements.city.value;
    //const country =  e.target.elements.country.value;

    if(city){ 
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`
    );
    const response = await api_call.json();

    console.log(response);

      this.setState({
        city:`${response.name}`, 
        //country:`${response.sys.country}`,
        temp:this.calcFhrToCel(response.main.temp),
        description:response.weather[0].main,
      });

    }else{
      this.setState({
        error: true
      });
    }

  };

  render(){
    return(
      <div className="App">
        <Form loadWeather={this.getWeather} error={this.state.error}/>

        {//<Button loadWeather={this.getWeather}/>}  
          }
        <Weather
        city={this.state.city}
        //country={this.state.country}
        temp={this.state.temp}
        description={this.state.description}
        />
        
      </div>
    ); 
     }
}

export default App;
