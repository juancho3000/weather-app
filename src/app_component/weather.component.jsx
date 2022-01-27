import React from 'react';


const Weather = props =>{
    return(
       <div className="cards">

         <form onSubmit={props.showMistake}> 
         <div>{props.mistake ? mistake(): null}</div>



       <h1>{props.city} {props.country}</h1>
       {props.temp ?   (<h1 className="py-2">{props.temp}&deg;</h1>):null
       }
       <h4 className="py-3">{props.description.charAt(0).toUpperCase()+
       props.description.slice(1)}
       </h4>
       </form>
       </div>
      
   );

  };

  function mistake() {
      return(
          <div className="mistake-danger" type="alert">
             We are sorry but this name is not registered in the database, it may have been a mispelling
          </div>
      );
  };
    




export default Weather;