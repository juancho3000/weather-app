import React from 'react';


const Weather = props =>{

    return(

       <div className="cards">

       



       <h1>{props.city} {props.country}</h1>
       {props.temp ?   (<h1 className="py-2">{props.temp}&deg;</h1>):null
       }
       <h4 className="py-3">{props.description.charAt(0).toUpperCase()+
       props.description.slice(1)}
       </h4>
       
       </div>
      
   );

  };

  
    




export default Weather;