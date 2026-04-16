import React, { useState,useEffect,useRef } from 'react'
import Calendar from 'react-calendar'
import './style.css'
import Calender from './Calender';


import 'react-calendar/dist/Calendar.css';


export default function Home() {
 
const [EventName, setEventName]=useState("");
const [EventCard, setEventCard]=useState([]);
const[selectDate,setSelectDate]=useState();
const[Time,setTime]=useState();

 const EventCardRef = useRef([]);

  useEffect(() => {
    EventCardRef.current = EventCard;
  }, [EventCard]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const currentTime = `${hours}:${minutes}`;

      EventCardRef.current.forEach(eve => {
        console.log("eve.time:", eve.time);
        console.log("currentTime:", currentTime);
        if (eve.time === currentTime && !eve.triggered) {
        eve.triggered = true;
      
        alert(`You have an event: ${eve.name}`);
          setEventCard(EventCard.splice(_,0));
      }
      });

    }, 1000);

    return () => clearInterval(interval);
  }, []);


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
    <div className="container">

    </div>
        <Calendar  onClickDay={(date)=>{setSelectDate(date.toLocaleDateString() );}} />

      <div className='card'>
        <h4>Events</h4>
  {EventCard.map((eve, index) => (
    <div className="card-body" key={index}>
      <h5 className="card-title">{eve.name}</h5>
      <p className="card-text">{eve.name} is on {selectDate} and {eve.time}</p>
      <button href="#" className="btn btn-warning" onClick={() => {
  setEventCard(prev => prev.filter((_, i) => i !== index))}}>Delete</button>
 
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
    <input type="text" class="form-control"  placeholder="Enter Date" value={selectDate} onChange={(e)=>{setSelectDate(e.target.value)}}/>
  </div>
  <div class="col-12">
    <label for="inputCity" class="form-label">Time</label>
    <input type="time" class="form-control"  placeholder='Enter time' onChange={(e)=>{setTime(e.target.value)}}/>
  </div>
 
  <div class="col-md-12">
    <button type="button"class="btn btn-warning" onClick={()=>{
    setEventCard(prev => [...prev, {
  id: selectDate,
  name: EventName,
  date: selectDate,
  time:Time}]);
}} style={{  width: "100%"}}>Save</button>
  </div>
</form>
    </div>
  </div>


    )
  }
