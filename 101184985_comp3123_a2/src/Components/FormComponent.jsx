import React from "react";
import "./FormStyle.css";
const Form = props=>{
    return(
        <div className="container">
            <div>{props.error?error():null}</div>
            <form onSubmit={props.loadWeather}>
            <div className="row">
                <div className="col-md-3 offset-md-2">
                    <input type="text"
                     className="form-control" 
                     name="city" />
                </div>
                <div className="col-md-3">
                
                </div>
                <div className="col-md-3 mt-md-0 text-md-left">
                    <button type="submit" className="btn btn-warning">Get Weather</button>
                </div>
            </div>
            </form>
        </div>
    )
}
function error(){
    return(
        <div className="alert alert-danger mx-5" role="alert">
            Invalid City Name
        </div>
    )
}
export default Form;