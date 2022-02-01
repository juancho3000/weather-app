import React, { useState } from "react";

import PageLoader from "./loading.component";

function UsePageLoader(){
const[loading, setLoading] = useState(false);

const changeState=()=>{
    setLoading(true);
    setTimeout(()=>{
    setLoading(false);    
    },8000); 
}
if(loading){
    return(
        <PageLoader/>
    )
 } 
else{
    return(
        <div className='row'> 
      <div className="col-md-3">
        <button className="btn-warning"  onClick={()=>changeState()}
           >Get weather for your location
          </button>
        </div>
      </div> 
    )
}
}
export default UsePageLoader;