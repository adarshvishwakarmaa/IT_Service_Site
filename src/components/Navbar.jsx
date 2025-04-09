import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css';

const Navbar = () => {
  return (
    <header>
        <div className="container">
            <div className="logo">
                <NavLink to="/">CoreAxis IT</NavLink>
            </div>

            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>

                    <li>
                        <NavLink to='/services'>Service</NavLink>
                    </li>

                    <li>
                       <NavLink to='/contact'>Contact</NavLink>
                    </li>

                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Navbar
