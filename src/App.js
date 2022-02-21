import React,{Component} from 'react';
import Weather from './app_component/weather.component';
import Form from './app_component/form.component';
import UsePageLoader from './app_component/passing.component';
//import Cold from './imgs-weather/cold-weather.jpg';
import Background from './imgs-weather/default-weather.jpg';
//import Hot from './imgs-weather/hot-weather.jpg';
//import Rain from './imgs-weather/rain-weather.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import "weather-icons/css/weather-icons.css";  
import './App.css';

//api call
const API_key = "36f9a175d9c4096f8585a4df81f68181";

class App extends Component{
  constructor(){
    super();
 
    this.state={
      loading:false,
      icon:undefined,
      city: undefined,
      country:undefined,
      main:undefined,
      temp:undefined,
      description:"",
      error:false,
      /*backgroundStyle:{
        backgroundImage: undefined,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100 %',
        height: '100vh',
      }*/
      };
      this.weatherIcon = {
        Thunderstorm:"wi-thunderstorm",
        Drizzle:"wi-sleet",
        Rain:"wi-storm-showers",
        Atmosphere:"wi-fog",
        Snow:"wi-snow",
        Clear:"wi-day-sunny",
        Clouds:"wi-day-fog"
      };
    }   
   
  //calculation to pass Fahrenheit to Celsius
  calcFhrToCel(temp){
    let cell= Math.floor(temp -273.15);
    return cell;
  }

  getWeatherIcon(icons, rangeid){
    switch(true){
      case rangeid >= 200 && rangeid <= 232:
        this.setState({icon: this.weatherIcon.Thunderstorm});
        break;

        case rangeid >= 300 && rangeid <= 321:
        this.setState({ icon: this.weatherIcon.Drizzle});
        break;

        case rangeid >= 500 && rangeid <= 531:
        this.setState({ icon: this.weatherIcon.Rain});
        break;

        case rangeid >= 600 && rangeid <= 622:
        this.setState({ icon: this.weatherIcon.Snow});
        break;

        case rangeid >= 701 && rangeid <= 781:
        this.setState({ icon: this.weatherIcon.Atmosphere});
        break;

        case rangeid === 800 :
        this.setState({ icon: this.weatherIcon.Clear});
        break;

        case rangeid >= 801 && rangeid <= 804:
        this.setState({ icon: this.weatherIcon.Clouds});
        break;

        default:
          this.setState({icon: this.weatherIcon.Clouds});
    }
  }
 
  //changing background - beginning
 
//changeing background - finish  

//Getting data - beginning
  getWeather = async (e) => {
    e.preventDefault();

     this.setState({
      loading:true
    },async ()=>{
      const city = e.target.elements.city.value;

      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`
      );
      const response = await api_call.json();
      console.log(response);
        if(city){ 
        this.setState({   
          city:`${response.name}`, 
          country:response.sys.country,
          temp:this.calcFhrToCel(response.main.temp),
          description:response.weather[0].main,
          error:"",
          loading:false,
        });
        this.getWeatherIcon(this.weatherIcon,response.weather[0].id);
      }else{
        this.setState({
          error:true,
          loading: false
        });
      }
    }) 
   
  };
  //getting data - finish   

  //rendering and return of API values - beginning
  render(){    
  
        return(   
          <div className="App"
          
         style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100 %',
            height: '100vh'
          }} 
           > 

         <Form loadWeather={this.getWeather} />  
         <UsePageLoader loading={this.state.loading} error={this.state.error}/> 
         <Weather 
          city={this.state.city}
          country={this.state.country}
          temp={this.state.temp}
          description={this.state.description}
          weatherIcon={this.state.icon}
            />  
          </div> 
               
        );
      
      }
    }
    //rendering and return of API values - end
      
export default App;