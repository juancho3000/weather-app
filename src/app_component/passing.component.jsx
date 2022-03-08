import React from "react";
import PageLoader from "./loading.component";

function UsePageLoader(props){
if(props.loading){
    return(
        <PageLoader/>
    )
 } 
else{
    return(
        
        <div className='row'> 
        <div>{props.error ? error() : null}</div>
      <div className="col-md-3">
        <button className="btn-warning" type="submit" >Get weather for your location
          </button>
        </div>
      </div> 
    )
 }
}
function error() {
    return(
        <div className="alert-danger" type="alert">
           Please type a city name
        </div>
    );
};
export default UsePageLoader;