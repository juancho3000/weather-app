import React,{Component} from 'react';
import './App.css';
import Weather from './app_component/weather.component';
import Form from './app_component/form.component';
import PageLoader from './app_component/loading.component';
import UsePageLoader from './app_component/passing.component';


//api call
const API_key = "36f9a175d9c4096f8585a4df81f68181";

class App extends Component{
  constructor(){
    super();
 
    this.state={
      //warning:true,
      loading:false,
      city: undefined,
      country:undefined,
      main:undefined,
      temp:undefined,
      description:"",
      error:undefined
      //mistake:false
    };
    
  };



  //calculation to pass Fahrenheit to Celsius
  calcFhrToCel(temp){
    let cell= Math.floor(temp -273.15);
    return cell;
  }

 
//Getting data - beginning



  getWeather = async (e) => {
    e.preventDefault();
    
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
        //loading:false
     
           
      });
    }
  };
  //getting data - finish   
 


  //rendering and return of API values - begin
  render(){
   
    return(     
      <div className="App">
        
        
        <Form loadWeather={this.getWeather} error={this.state.error}/>
        <PageLoader/>
        <Weather 
        city={this.state.city}
        country={this.state.country}
        temp={this.state.temp}
       description={this.state.description}
        />    
        <UsePageLoader/>
      </div>
      
    );
  }
}
    
  
    //rendering and return of API values - end
  

    
export default App;