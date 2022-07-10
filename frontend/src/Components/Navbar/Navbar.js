import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";



export default function Navbar() {
  return (
    <div>
        <div className='NavbarMain'>
            <div className='navbar-buttons'>
                <div className='navbar-buttons-text'><p className='navbar-buttons-text'>HOME</p></div>
                <Link to="/" className='navbar-buttons-icon'><ion-icon className='navbar-buttons-icon' name="home"></ion-icon></Link>
            </div>
            <div className='navbar-buttons'>
                <div className='navbar-buttons-text'><p className='navbar-buttons-text'>ABOUT</p></div>
                <Link to="/about" className='navbar-buttons-icon'><ion-icon className='navbar-buttons-icon' name="person"></ion-icon></Link>
            </div>
            <div className='navbar-buttons'>
                <div className='navbar-buttons-text'><p className='navbar-buttons-text'>PROJECTS</p></div>
                <Link to="/projects" className='navbar-buttons-icon'><ion-icon className='navbar-buttons-icon' name="briefcase"></ion-icon></Link>
            </div>
            <div className='navbar-buttons'>
                <div className='navbar-buttons-text'><p className='navbar-buttons-text'>CONTACT</p></div>
                <Link to="/contact" className='navbar-buttons-icon'><ion-icon className='navbar-buttons-icon' name="call"></ion-icon></Link>
            </div>
        </div>
    </div>
  )
}
