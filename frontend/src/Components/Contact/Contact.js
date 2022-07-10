import React from 'react'
import "./Contact.css"

export default function Contact() {
  return (
    <div>
        <div className='contact-main'>
            <div className='contact-title'>
                <p id='contact-title'>Contact Mee <span id='hp-nametitle-2-span1'><span id='hp-nametitle-2-span4'><span id='hp-nametitle-2-span3'></span></span></span></p>
            </div>
            <div className='contact-text'>
                <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            </div>
            <div className='contact-info'>
              <div className='contact-info-socialmedia'>
                <ion-icon name="logo-instagram"></ion-icon>
                <ion-icon name="logo-facebook"></ion-icon>
                <ion-icon name="logo-twitter"></ion-icon>
                <ion-icon name="logo-github"></ion-icon>
                <ion-icon name="logo-whatsapp"></ion-icon>
              </div>
              <div className='contact-info-info'>

                <div className='contact-info-info-div'>
                  <div className='contact-info-info-div-icon'>
                    <ion-icon name="person"></ion-icon>
                  </div>
                  <div className='contact-info-info-div-text'>
                    <h2>NAME</h2>
                    <h1>İshak Yöndemli</h1>
                  </div>
                </div>
                <div className='contact-info-info-div'>
                  <div className='contact-info-info-div-icon'>
                    <ion-icon name="mail"></ion-icon>
                  </div>
                  <div className='contact-info-info-div-text'>
                    <h2>MAİL</h2>
                    <h1>thedooptr@gmail.com</h1>
                  </div>
                </div>
                <div className='contact-info-info-div'>
                  <div className='contact-info-info-div-icon'>
                    <ion-icon name="call"></ion-icon>
                  </div>
                  <div className='contact-info-info-div-text'>
                    <h2>PHONE</h2>
                    <h1>+90 551 187 97 41</h1>
                  </div>
                </div>

              </div>
            </div>
            <div className='contact-form'>
              <form>
                <input  placeholder='Name'></input>
                <input placeholder='Mail'></input>
                <input placeholder='Title'></input>
                <textarea placeholder='Birşeyler Yazın...'></textarea>
                <button id='contact-submitbtn'>Submit</button>
              </form>
            </div>
        </div>
    </div>
  )
}
