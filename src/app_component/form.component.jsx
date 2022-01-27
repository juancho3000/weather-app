import React from 'react';


const Form = props =>{ 
  return (
     
    <div className="container">
        <form onSubmit={props.loadWeather}>
        <div>{props.error ? error(): null}</div>
       
      <div className="row">
        <div className="col-md-3-1">
          <input 
          type="text" 
          className="form-control" 
          name="city" 
          placeholder='type city name'
           
          autoComplete="off" />
          
        </div>
    </div>

   

<div className='row'> 
<div className="col-md-3">
   <button className="btn-warning"  type="submit"
    >Get weather for your location
    </button>
</div>
</div> 

        </form>
        </div>     
  );
};

function error() {
    return(
        <div className="alert-danger" type="alert">
           Please type a city name
        </div>
    );
};
  
  
export default Form;