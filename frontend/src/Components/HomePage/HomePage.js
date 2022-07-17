import React from 'react'
import "./HomePage.css"
import personimg from "./julian-wan-WNoLnJo7tS8-unsplash.jpg"



export default function HomePage() {
  return (
    <div>
      <div className='hp-main'>
        <div className='hp-image'>
          <img alt='person' src={personimg}></img>
        </div>
        <div className='hp-content'>
          <div className='hp-nametitle'>
            <p id='hp-nametitle-1'>Get To Know Me</p>
            <p id='hp-nametitle-2'>İshak Yöndemli <span id='hp-nametitle-2-span1'><span id='hp-nametitle-2-span4'><span id='hp-nametitle-2-span3'></span></span></span></p>
          </div>
          <div className='hp-jobtitle'>
            <p id='hp-jobtitle-1'>Web Developer</p>
          </div>
          <div className='hp-socialmedia'>
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="logo-github"></ion-icon>
            <ion-icon name="logo-whatsapp"></ion-icon>
          </div>
          <div className='hp-buttons'>
            <a href='/about' className='allbuttons' id='hp-btn1'>About Me</a>
            <a href='/contact' className='allbuttons' id='hp-btn2'>Hire Me</a>
          </div>
        </div>
      </div>
    </div>
  )
}
