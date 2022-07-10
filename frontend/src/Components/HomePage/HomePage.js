import React from 'react'
import "./HomePage.css"


export default function HomePage() {
  return (
    <div>
      <div className='hp-main'>
        <div className='hp-image'>
          <img alt='person' src='https://tunis.ibthemespro.com/static/media/img-mobile.fdf36938a886019a0f27.jpg'></img>
        </div>
        <div className='hp-content'>
          <div className='hp-nametitle'>
            <p id='hp-nametitle-1'>Get To Know Me</p>
            <p id='hp-nametitle-2'>İshak Yöndemli <span id='hp-nametitle-2-span1'><span id='hp-nametitle-2-span4'><span id='hp-nametitle-2-span3'></span></span></span></p>
          </div>
          <div className='hp-jobtitle'>
            <p id='hp-jobtitle-1'>Web Designer</p>
          </div>
          <div className='hp-socialmedia'>
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="logo-github"></ion-icon>
            <ion-icon name="logo-whatsapp"></ion-icon>
          </div>
          <div className='hp-buttons'>
            <button className='allbuttons' id='hp-btn1'>About Me</button>
            <button className='allbuttons' id='hp-btn2'>Hire Me</button>
          </div>
        </div>
      </div>
    </div>
  )
}
