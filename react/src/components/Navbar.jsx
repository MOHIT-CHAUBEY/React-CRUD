import React from 'react'
import {Link , NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand badge bg-danger" to="/">CRUD</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end " id="navbarNav" >
      <ul className="navbar-nav">
        <li className="nav-item">
         <NavLink className="nav-link active" aria-current="page" to="/page1">Create</NavLink>
        </li>
        <li className="nav-item">
         <NavLink className="nav-link" to="/page2">Read</NavLink>
        </li>
        <li className="nav-item">
         <NavLink className="nav-link" to="/page3">Update</NavLink>
        </li>
        <li className="nav-item">
         <NavLink className="nav-link" to="/page4" >Delete</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </> )
}

export default Navbar
