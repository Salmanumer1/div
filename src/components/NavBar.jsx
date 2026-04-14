import React from 'react'
import About from './About'
export default function NavBar(props) {
  return (
    <>
    <div  >
        <nav className="navbar navbar-expand-lg">
  <div className="container-fluid"  style={{ backgroundColor: "#444", }}>
    <a className="navbar-brand" href="/" style={{color:"white"}}>{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/" style={{color:"white"}}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About"style={{color:"white"}}>About</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="/CalenderApp" style={{color:"white"}}>To Do</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-dark" type="submit" style={{color:"white"}}>Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
</>

  )
}
