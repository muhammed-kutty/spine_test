import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='container'>
        <nav className="navbar">
        <NavLink 
          to="/" 
          className="nav-link" 
          activeClassName="active" 
          end
        >
          Home
        </NavLink>
        <NavLink 
          to="/products" 
          className="nav-link" 
          activeClassName="active"
        >
          Products
        </NavLink>
        <NavLink 
          to="/about" 
          className="nav-link" 
          activeClassName="active"
        >
          About
        </NavLink>
      </nav>

    </div>
  )
}

export default Header