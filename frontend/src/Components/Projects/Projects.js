import React, { useEffect, useState } from 'react'
import "./Projects.css"
import 'aos/dist/aos.css'



export default function Projects() {


  const[projects,setprojects] = useState([
    {
      title:"deneme",
      dateandtime:"18/07/2022",
      images:[
        "https://www.donanimhaber.com/images/images/haber/144035/1400x1400whatsapp-resim-ve-videolarin-uzerine-cizim-yapmayi-test-ediyor.jpg"
      ],
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
    await fetch("/getprojects")
    .then(res=> res.json())
    .then(res=> setprojects(res))
  }





  return (
    <div>
        <div className='projects-main'>
            <div className='projects-title'>
                <p id='contact-title'>Projects <span id='hp-nametitle-2-span1'><span id='hp-nametitle-2-span4'><span id='hp-nametitle-2-span3'></span></span></span></p>
            </div>

            <div className='projects-content'>



              {projects.map(project=>{

                return(
                <div href="den" data-aos="fade-right" id={project.tourl} className='projects-card'>
                  {
                    window.addEventListener("click",function(event){
                      if(event.target.id == project.tourl)
                      {
                        window.location.href = "/Project/" + project.tourl;
                      }
                    })
                  }
                  <div className='projects-card-imgarea'>
                    <img src={project.images[0]}></img>
                  </div>
                  <div className='projects-card-titlearea'>
                    <div className='projects-card-titlearea-titleANDtime'>
                      <h1>{project.title}</h1>
                      <h2>{project.dateandtime}</h2>
                    </div>
                    <div className='projects-card-titlearea-tags'>
                    {project.tags.map(tags=>{
                      return(
                        <p key={tags.index}>{tags}</p>
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
