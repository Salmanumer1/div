import React, { useContext, useState } from "react";
import { EventContext } from "./EventContext.jsx";
import './styles.css'
export default function Alert() {
const [evedetails,setEveDetails]=useState()
const [Time,setTime]=useState()
const [Date,setDate]=useState()
const [details,setDetails]=useState([])
const handleOnChange=(e)=>{
setEveDetails(e.target.value)
}
const AddDetails=()=>{
const eve={

  name:evedetails,
  time:Time,
  date:Date
}
setDetails(prev=>[...prev,eve])
}
  return (
    <div className="container">
      <h2>All Alerts</h2>
 <label for="inputCity" class="form-label my-3"><h5>Enter Notes</h5></label>
<textarea className="form-control  bg-warning-border-subtle"  onChange={handleOnChange} id="Mybox" rows="3"></textarea>
 <label for="inputCity" class="form-label my-3"><h5>Enter Time</h5></label>
 <input type="time" class="form-control my-1"  placeholder='Enter time' onChange={(e)=>{setTime(e.target.value)}}/>
 <label for="inputCity" class="form-label my-3"><h5>Enter Date</h5></label>
 <input type="date" class="form-control my-1"  placeholder='Enter Date' onChange={(e)=>{setDate(e.target.value)}}/>
     <button className="btn btn-warning my-3" style={{width : "20%"}}onClick={AddDetails}>Save</button>
         <div className='card' >
        <h4>Events Notes</h4>
  {details.map((eve,index) => (
    <div className="card-body" key={index}>
      <h5 className="card-title">{eve.name}</h5>
      <p className="card-text">{eve.time}</p>
      <p className="card-text">{eve.date}</p>
      <button className="btn btn-warning" onClick={()=>{setDetails(prev=>prev.filter((_, i)=> i!==index))}}>Delete</button>
      </div>
        )
        )}
</div>

</div>


  );
}