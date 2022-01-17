import react from 'react';
import './App.css';

function App() {
  return (
        <div className="container">  
        <div className="row">
        <div className="col-md-3">
                 <input type="text" className="form-control" name="city" autoComplete="off"/>
        </div>
        <div className="col-md-3">
      <button className="btn-warning">Get weather for your location</button>
    </div>
         </div>
          </div>

 
          
  );
}



export default App;
