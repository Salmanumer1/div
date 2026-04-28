import React, { useState } from 'react'
import"./About.css"
export default function About() {
  const [mySty,setmySty]=useState({
    color:"black",
    backgroundColor:"white"

  })
  const [btnxt,setbtntxt]=useState("Change Mode")
  const changeStyle =()=>{
if(mySty.color=='black'){
  setmySty({
    color:"white",
    backgroundColor:"black",
   border:"1px solid white"}
 )
    setbtntxt("Change Mode")
}

else{  setmySty({
    color:"black",
    backgroundColor:"white"})}
setbtntxt("Change Mode")
  }
  return (
    <>
    <div className="container about-container" style={mySty}>
      <h2 style={mySty} className="about-heading">About Event Manager</h2>

      <div className="accordion" id="accordionExample">

        {/* Item 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" style={mySty}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              style={mySty}
            >
              📅 Manage Your Events Easily
            </button>
          </h2>

          <div id="collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body" style={mySty}>
              Add, track, and organize your daily events with ease.
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              style={mySty}
            >
              ⏰ Smart Alerts
            </button>
          </h2>

          <div id="collapseTwo" className="accordion-collapse collapse">
            <div className="accordion-body" style={mySty}>
              Get notified exactly when your event time matches.
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              style={mySty}
            >
              💾 Data Persistence
            </button>
          </h2>

          <div id="collapseThree" className="accordion-collapse collapse">
            <div className="accordion-body" style={mySty}>
              Your events stay saved even after refresh using localStorage.
            </div>
          </div>
        </div>

      </div>

      <button className="btn btn-warning my-3" onClick={changeStyle}>
        {btnxt}
      </button>
    </div>
  


    </>
  )
}
