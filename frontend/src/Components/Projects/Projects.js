import React, { useEffect, useState } from 'react'
import "./Projects.css"
import 'aos/dist/aos.css'



export default function Projects() {


  const[projects,setprojects] = useState([
    {
      title:"deneme",
      dateandtime:"18/07/2022",
      image:"https://www.donanimhaber.com/images/images/haber/144035/1400x1400whatsapp-resim-ve-videolarin-uzerine-cizim-yapmayi-test-ediyor.jpg",
      tourl:"deneme",
      tags:[
        "MERN",
        "React",
        "Admin Panel"
      ]
    }
  ]);

  useEffect(() => {
    getprojectsdata();
  },[]);


  async function getprojectsdata()
  {
    await fetch("/projects")
    .then(res=> res.json())
    .then(res=> setprojects(res))
  }


  return (
    <div>
        <div className='projects-main'>
            <div className='projects-title'>
                <p id='contact-title'>Projects <span id='hp-nametitle-2-span1'><span id='hp-nametitle-2-span4'><span id='hp-nametitle-2-span3'></span></span></span></p>
            </div>
            <div className='projects-categories'>

                <p className='tags'>Web Design</p>
                <p className='tags'>Fullstack Website</p>
                <p className='tags'>One Page Website</p>
                <p className='tags'>Graphic Design</p>
                <p className='tags'>MERN Stack</p>


            </div>
            <div className='projects-content'>



              {projects.map(projects=>{
                return(
                <div data-aos="fade-right" id='projects-card' className='projects-card'>
                  <div className='projects-card-imgarea'>
                    <img src={projects.image}></img>
                  </div>
                  <div className='projects-card-titlearea'>
                    <div className='projects-card-titlearea-titleANDtime'>
                      <h1>{projects.title}</h1>
                      <h2>{projects.dateandtime}</h2>
                    </div>
                    <div className='projects-card-titlearea-tags'>
                    {projects.tags.map(tags=>{
                      return(
                        <p>{tags}</p>
                      )
                    })}
                    </div>
                  </div>
                </div>
                )
              })}

            </div>
        </div>
    </div>
  )
}
