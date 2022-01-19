import React from 'react';

const Form = props =>{
    

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3-1">
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

export default Form;