import React, { useState,useEffect } from "react";

function CalendarApp() {
  const [date, setDate] = useState(new Date());
  const [selectedDay,setselectedDay]=useState()
  const [Event,setEvent]=useState("none")
  const [Color,setactiveColor]=useState(null)

  const [Task,setTask]=useState({})
useEffect(()=>{
  
    
    alert("Event Added")
    
  
},[Task])


  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }
 

  return (
    <div>
      <h2>Calendar</h2>

      <button className="btn btn-warning mx-3" onClick={prevMonth}>Prev</button>
      <span>
        {date.toLocaleString("default", { month: "long" })} {year}
      </span>
      <button  className="btn btn-warning mx-3" onClick={nextMonth}>Next</button>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)",}}>
        {days.map((day, index) => {
          const today = new Date();

          const isToday =
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();
const fullDate = `${year}-${month}-${day}`;

          return (
            <div
             
              key={index}
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                background: isToday ? "lightblue" : "white",
                color:Task[fullDate] ? "blue":"black"
               
              }}
              
            onClick={() => {setselectedDay(day)}}
            >
              {day}{selectedDay === day && selectedDay!== null && <div style={{ background:Task[fullDate] ? "green":"red",
              
               }} >
                <input className="form-control me-2 my-3" type="text" name="" id="" onChange={(e)=>{setEvent(e.target.value)}}/>
    <button className="btn btn-warning my-2 mx-2"
          onClick={() =>{
            setTask(prev => ({
              ...prev,
              [fullDate]: Event,
            
            }))
 ;setactiveColor(day)}}
           
            
          
        >
          Add Event
        </button>
      

      {Task[fullDate] && <h5>{Task[fullDate]}</h5>}
    
  </div>
    }
              
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CalendarApp;