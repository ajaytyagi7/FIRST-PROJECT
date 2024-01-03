import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
      </a>
    <button 
    className="navbar-toggler" type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
      <li className="nav-item">
          <NavLink className="nav-link" to='/'>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/Shop'>
            Shop
          </NavLink>
        </li> 
        <li className="nav-item">
          <NavLink className="nav-link" to='/Contact'>
            Contact
          </NavLink>
        </li> 
        <li className="nav-item">
          <NavLink className="nav-link" to='/Aboutus'>
            Aboutus
          </NavLink>
        </li> 
        <li className="nav-item">
          <NavLink className="nav-link" to='/Login'>
            Login
          </NavLink>
        </li> 
        <li className="nav-item">
          <NavLink className="nav-link" to='/SignIn'>
            SignIn
          </NavLink>
        </li> 
        <li className="nav-item">
          <NavLink className="nav-link" to='/Search'>
            Search
          </NavLink>
        </li> 
        <li className="nav-item">
          <NavLink className="nav-link" to='/Cart'>
            Cart
          </NavLink>
        </li> 
        <li className="nav-item">
          <NavLink className="nav-link" to='/Women'>
            Women
          </NavLink>
        </li> 
        <li className="nav-item">
          <NavLink className="nav-link" to='/Mens'>
           Mens
          </NavLink>
        </li> 
       
      </ul>
     
    </div>
  </div>
</nav>
</div>
    </div>
  )
}

export default Navbar