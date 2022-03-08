import React from 'react';

const Weather = props =>{
    return(
       <div className="cards">
       <h1>{props.city} {props.country}</h1>         
       <h5 className="py-4">
         <i className={`wi ${props.weatherIcon} display-1`}></i>
       </h5>
       {props.temp ?   (<h1 id="py-2">{props.temp}&deg;C</h1>):null
       }
       <h4 className="py-3">{props.description.charAt(0).toUpperCase()+
       props.description.slice(1)}
       </h4>
       </div> 
   );
  };
export default Weather;