import React from 'react';


const Weather = props =>{
    return(

       <div className="cards">
       <h1>
        {props.city}, {props.country}
       </h1>
       
       <h1 className="py-2">{props.temp}&deg;</h1>
       
       

       <h4 className="py-3">{props.description}</h4>
       </div>
   
 );
};



export default Weather;