import React, { useState } from 'react'
import Calendar from 'react-calendar'
import './style.css'


import 'react-calendar/dist/Calendar.css';


export default function Home() {
    const [EventName, setEventName]=useState("");
const [EventCard, setEventCard]=useState([]);
  return (
  <div className="container">
    <div className="right-panel">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/" style={{color:"white"}} ><ion-icon className="mx-2" name="home"></ion-icon>Home</a>
        </li>
        
         <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/" style={{color:"white"}} ><ion-icon className="mx-2"name="alert-circle-outline"></ion-icon>Alert</a>
        </li>

         <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Calender" style={{color:"white"}} ><ion-icon className="mx-2"name="calendar-outline"></ion-icon>Calender</a>
        </li>
      </ul>
    </div>

        <Calendar />
      <div className='card'>
        <h4>Events</h4>
  {EventCard.map((eve, index) => (
    <div className="card-body" key={index}>
      <h5 className="card-title">{eve}</h5>
      <p className="card-text">{eve} is held on Date and Time</p>
      <a href="#" className="btn btn-warning">Delete</a>
    </div>
  ))}
  
    
      </div>




    <div className="left-panel">
     <form class="row g-3">
  <h4>Add Events</h4>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Events Name</label>
    <input type="text" class="form-control"  placeholder="E.g Wedding" onChange={(e)=>{setEventName(e.target.value)}}/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Date</label>
    <input type="text" class="form-control"  placeholder="Enter Date"/>
  </div>
  <div class="col-12">
    <label for="inputCity" class="form-label">Time</label>
    <input type="text" class="form-control"  placeholder='Enter time'/>
  </div>
 
  <div class="col-md-12">
    <button type="button"class="btn btn-warning" onClick={()=>{
    setEventCard([...EventCard,EventName]);
}} style={{  width: "100%"}}>Save</button>
  </div>
</form>
    </div>
  </div>


    )
}
