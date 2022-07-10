import React from 'react'
import "./About.css"



export default function About() {
  return (
    <div>
        <div className='About-main'>
            <div className='About-title'>
                <p id='contact-title'>About Me <span id='hp-nametitle-2-span1'><span id='hp-nametitle-2-span4'><span id='hp-nametitle-2-span3'></span></span></span></p>
            </div>
            <div className='About-info'>
                <div className='About-info-personal'>
                    <div className='About-info-personal-text'>
                        <div className='About-info-personal-text-title'>
                            <h1>PERSONAL İNFOS</h1>
                        </div>
                        <div data-aos="fade-right" className='About-info-personal-text-textlists'>
                            <p>Name: <font color='white'>İshak</font></p>
                            <p>Last Name: <font color='white'>Yöndemli</font></p>
                            <p>Age: <font color='white'>18</font></p>
                            <p>Country: <font color='white'>Türkiye</font></p>
                            <p>Freelance: <font color='white'>Available</font></p>
                            <p>E-Mail: <font color='white'>thedooptr@gmail.com</font></p>
                            <p>Phone: <font color='white'>+90 551 187 97 41</font></p>
                            <p>Languages: <font color='white'>Turkish , English</font></p>
                        </div>
                    </div>
                    <div data-aos="fade-left" className='About-info-personal-links'>
                        <div className='About-info-personal-links-buttons'>
                            <a className='allbuttons'>Download CV</a>
                            <a className='allbuttons'>Contact Me</a>
                        </div>
                        <div className='About-info-personal-links-socialmedia'>
                            <div data-aos="fade-left"><ion-icon className='navbar-buttons-icon' name="briefcase"></ion-icon><span className='allbuttons'><p>İnstagram</p></span></div>
                            <div data-aos="fade-left"><ion-icon className='navbar-buttons-icon' name="briefcase"></ion-icon><span className='allbuttons'><p>Facebook</p></span></div>
                            <div data-aos="fade-left"><ion-icon className='navbar-buttons-icon' name="briefcase"></ion-icon><span className='allbuttons'><p>Twitter</p></span></div>
                        </div>
                    </div>
                </div>
                <div className='About-info-istatistic'>
                    <div data-aos="fade-left" className='About-info-istatistic-card'>
                        <h1>48+</h1>
                        <h2>Happy Customers</h2>
                    </div>
                    <div data-aos="fade-left" className='About-info-istatistic-card'>
                        <h1>74+</h1>
                        <h2>Selling Products</h2>
                    </div>
                    <div data-aos="fade-left" className='About-info-istatistic-card'>
                        <h1>48+</h1>
                        <h2>Happy Customers</h2>
                    </div>
                    <div data-aos="fade-left" className='About-info-istatistic-card'>
                        <h1>74+</h1>
                        <h2>Selling Products</h2>
                    </div>
                </div>
            </div>
            <div className='About-skills'>
                <div data-aos="fade-up" className='About-skills-title'>
                    <h1>Skills</h1>
                </div>
                <div className='About-skills-content'>
                    <div data-aos="fade-right" className='About-skills-card'>
                        <div className='About-skills-card-title'>
                            <h1><font  color="#FFB400">CSS</font> 90%</h1>
                        </div> 
                        <div className='About-skills-card-amout'>
                            <div></div>
                        </div>
                    </div>
                    <div data-aos="fade-right" className='About-skills-card'>
                        <div className='About-skills-card-title'>
                            <h1><font  color="#FFB400">CSS</font> 90%</h1>
                        </div> 
                        <div className='About-skills-card-amout'>
                            <div></div>
                        </div>
                    </div>
                    <div data-aos="fade-right" className='About-skills-card'>
                        <div className='About-skills-card-title'>
                            <h1><font  color="#FFB400">CSS</font> 90%</h1>
                        </div> 
                        <div className='About-skills-card-amout'>
                            <div></div>
                        </div>
                    </div>
                    <div data-aos="fade-right" className='About-skills-card'>
                        <div className='About-skills-card-title'>
                            <h1><font  color="#FFB400">CSS</font> 90%</h1>
                        </div> 
                        <div className='About-skills-card-amout'>
                            <div></div>
                        </div>
                    </div>
                    <div data-aos="fade-right" className='About-skills-card'>
                        <div className='About-skills-card-title'>
                            <h1><font  color="#FFB400">CSS</font> 90%</h1>
                        </div> 
                        <div className='About-skills-card-amout'>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='About-services'>
                <div data-aos="fade-up" className='About-services-title'>
                    <h1>Services</h1>
                </div>
                <div className='About-services-content'>
                    <div data-aos="fade-right" className='About-services-card'>
                        <ion-icon name="desktop-outline"></ion-icon>
                        <h1>Responsive Design</h1>
                        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    </div>
                    <div data-aos="fade-right" className='About-services-card'>
                        <ion-icon name="desktop-outline"></ion-icon>
                        <h1>Responsive Design</h1>
                        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    </div>
                    <div data-aos="fade-right" className='About-services-card'>
                        <ion-icon name="desktop-outline"></ion-icon>
                        <h1>Responsive Design</h1>
                        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    </div>
                </div>
            </div>
            <div className='About-clients'>

            </div>
        </div>
    </div>
  )
}
