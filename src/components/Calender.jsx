import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './clander.css'

export default function Calender() {

  const [markedDates, setMarkedDates] = useState([])

  // Toggle date
  const handleClickDay = (date) => {
    const formatted = date.toDateString()

    setMarkedDates(prev => {
      if (prev.includes(formatted)) {
        // REMOVE if already exists
        return prev.filter(d => d !== formatted)
      } else {
        // ADD if not exists
        return [...prev, formatted]
      }
    })
  }

  // Add class to marked dates
  const tileClassName = ({ date }) => {
    const formatted = date.toDateString()
    return markedDates.includes(formatted) ? "marked-date" : ""
  }

  return (
  <div>
      <Calendar 
        onClickDay={handleClickDay}
        tileClassName={tileClassName}
      />
   </div>
  )
}