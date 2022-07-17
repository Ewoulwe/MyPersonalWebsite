import React, { useEffect, useState } from 'react'
import "./About.css"





export default function About() {



      const[skills,setskills] = useState([
        {
            title:"HTML",
            float:"45%",
        },
        {
            title:"Reactjs",
            float:"80%",
        }
      ]);
      const[services,setservices] = useState([
        {
          title:"deneme",
          text:"18/07/2022",
          image:"person",
        },
        {
            title:"deneme",
            text:"18/07/2022",
            image:"cog-outline",
        },
      ]);
      const[statistics,setstatistics] = useState([
        {
          title:"Mutlu MüŞteri",
          amout:"38+",
        }
      ]);
    
      useEffect(() => {
        getaboutdata();
      },[]);


      async function getaboutdata()
      {
        await fetch("/about/getstatistics")
        .then(res=> res.json())
        .then(res=> setstatistics(res))

        await fetch("/about/getskills")
        .then(res=> res.json())
        .then(res=> setskills(res))

        await fetch("/about/getservices")
        .then(res=> res.json())
        .then(res=> setservices(res))
      }


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
                            <p>Age: <font color='white'>24</font></p>
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
                            <a href='/contact' className='allbuttons'>Contact Me</a>
                        </div>
                        <div className='About-info-personal-links-socialmedia'>

                        </div>
                    </div>
                </div>
                <div className='About-info-istatistic'>

                    {statistics.map(statistics=>{
                        return(
                        <div data-aos="fade-left" className='About-info-istatistic-card'>
                            <h1>{statistics.amout}</h1>
                            <h2>{statistics.title}</h2>
                        </div>
                        )
                    })}

                </div>
            </div>
            <div className='About-skills'>
                <div data-aos="fade-up" className='About-skills-title'>
                    <h1>Skills</h1>
                </div>
                <div className='About-skills-content'>

                    {skills.map(skills=>{
                        return(
                        <div data-aos="fade-right" className='About-skills-card'>
                            <div className='About-skills-card-title'>
                                <h1><font  color="#FFB400">{skills.title}</font> {skills.float}</h1>
                            </div> 
                            <div style={{width:skills.float}} className='About-skills-card-amout'>
                                <div></div>
                            </div>
                        </div>
                        )
                    })}

                </div>
            </div>
            <div className='About-services'>
                <div data-aos="fade-up" className='About-services-title'>
                    <h1>Services</h1>
                </div>
                <div className='About-services-content'>

                    {services.map(services=>{
                        return(
                        <div data-aos="fade-right" className='About-services-card'>
                            <ion-icon name={services.image}></ion-icon>
                            <h1>{services.title}</h1>
                            <p>{services.text}</p>
                        </div>
                        )
                    })}

                </div>
            </div>
            <div className='About-clients'>

            </div>
        </div>
    </div>
  )
}
