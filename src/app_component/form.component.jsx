import React, {Fragment, useState} from 'react';

const Form = () =>{
    
const[data, setData] = useState({
    city:''
})

const handleInputChange = (event) =>{
    console.log('it works')
}

  return (
      <Fragment>
    <div className="container">
      <div className="row">
        <div className="col-md-3-1">
          <input type="text" 
          className="form-control" 
          name="city" 
          placeholder='type city name'
          onChange={handleInputChange}  
          autoComplete="off" />
          
        </div>

      
        <div className='row'>
        <div className="col-md-3">
           <button className="btn-warning"
            type="submit">Get weather for your location
            </button>
        </div>
        </div>
      </div>
    </div>
</Fragment>
 );
}

export default Form;