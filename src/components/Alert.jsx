import React, { useContext, useState } from "react";
import { EventContext } from "./EventContext.jsx";

export default function Alert() {
    const [evedetails,setEveDetails]=useState()
const [details,setDetails]=useState([])
const handleOnChange=(e)=>{
setEveDetails(e.target.value)
}
const AddDetails=()=>{
setDetails(prev=>[...prev,evedetails])
}
  return (
    <div className="container">
      <h2>All Alerts</h2>
 <textarea className="form-control  bg-warning-border-subtle"  onChange={handleOnChange} id="Mybox" rows="3"></textarea>
     <button className="btn btn-warning my-3" onClick={AddDetails}>Save</button>
         <div className='card'>
        <h4>Events</h4>
  {details.map((eve, index) => (
    <div className="card-body" key={index}>
      <h5 className="card-title">{eve}</h5>
      <p className="card-text">{eve}</p>
        </div>)
)}
</div>

</div>


  );
}