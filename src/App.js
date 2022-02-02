import React,{Component} from 'react';
import Weather from './app_component/weather.component';
import Form from './app_component/form.component';
import UsePageLoader from './app_component/passing.component';
import Background from '../src/imgs-weather/default-weather.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';  
import './App.css';





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
      error:false
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
          loading:false
        });
      }else{
        this.setState({
          error:true,
          loading: false
        });
      }
    })  
  };
  //getting data - finish   

//changing background - begin

//changeing background - finish  


  //rendering and return of API values - begin
  render(){
     
      
        return(   
          <div className="App" style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100 %',
            height: '100vh'
          }}> 

         <Form loadWeather={this.getWeather} />  
         <UsePageLoader loading={this.state.loading} error={this.state.error}/> 
         <Weather 
          city={this.state.city}
          country={this.state.country}
          temp={this.state.temp}
          description={this.state.description}
            />  
          </div>
        
          
        );
      
      }
    }
   

    
  
    //rendering and return of API values - end
  

    
export default App;