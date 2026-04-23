import React, { useState,useContext } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './clander.css'
import { EventContext } from "./EventContext.jsx";

export default function Calender() {
  const { EventCard,setEventCard } = useContext(EventContext)
  const [markedDates, setMarkedDates] = useState([])


  const handleClickDay = (date) => {
    const formatted = date.toDateString()

    setMarkedDates(prev => {
      if (prev.includes(formatted)) {
       
        return prev.filter(d => d !== formatted)
      } else {
       
        return [...prev, formatted]
      }
    }
  )

   
  
}

const tileClassName = ({ date }) => {
const formatted = date.toDateString()
return markedDates.includes(formatted) ? "marked-date" : ""
  }

  return (
  <div>
      <Calendar 
        onClickDay={handleClickDay}
        tileClassName={tileClassName} />

      <div className='cards'>
        <h4>Events</h4>
  {EventCard.map((eve, index) => (
    <div className="card-body" key={index} >
      <h5 className="card-title">{eve.name}</h5><h4 style={{marginLeft:"950px"}}>{eve.date}</h4>
      <p className="card-text">{eve.name} is on {eve.date} and Time is {eve.time}</p>
      <h5>Event Notes</h5>
      <p>{eve.note}</p>
      <button href="#" className="btn btn-warning" onClick={() => {
  setEventCard(prev => prev.filter((_, i) => i !== index))}}>Delete</button>
 </div>    
  ))}
 </div>
</div>
  
  )
}