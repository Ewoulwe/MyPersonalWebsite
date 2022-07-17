import React, { useState , useEffect } from 'react';
import  "./ProjectPage.css"



export default function ProjectPage() {




const[projectsall,setprojectsall] = useState([
  {
    title:"Punoti car gallery",
    dateandtime:"18/07/2022",
    images:[
      "https://i.ytimg.com/vi/4dgVmdk6Pus/maxresdefault.jpg",
      "https://free4kwallpapers.com/uploads/originals/2019/03/25/aesthetic-view-wallpaper.jpg",
      "https://ak.picdn.net/shutterstock/videos/6294695/thumb/1.jpg",
      "https://images.hdqwalls.com/wallpapers/mount-fuji-mesmerising-view-4k-r1.jpg",
      "https://images4.alphacoders.com/935/935246.jpg"
    ],
    tourl:"deneme",
    tags:[
      "MERN",
      "React",
      "Admin Panel"
    ],
    longtext:"fgdgffffffffffffffffffffffffffffffffffffffff"
  }
]);
//GlobalDeğişkenler------------------------
let time = 0 ;
let resp = 0;
const mainimg = document.querySelector("#mainimg");
let currentslide = 0;
//UseEffect------------------------
useEffect(() => {

  projectspageStart();
  //------------------------------------
  document.getElementsByClassName("projectpage-imagesandvideos-amout-div")[0].style.background = "#FFB400";
  document.getElementsByClassName("projectpage-imagesandvideos-amout-div")[0].style.bottom = "25%";

},[]);
//PageStartFun------------------------------------
async function projectspageStart()
{
  await getprojectsalldata();
  await islem();
}
//------------------------------------

async function getprojectsalldata()
{
  const response = await fetch("/getprojects");
  const json = await response.json(); 
  resp = await json;
  //console.log(resp)
 
}
async function islem()
{
  for (let index = 0; index < resp.length; index++) {
    const element = resp[index];
    if("/Project/" + element.tourl  === window.location.pathname)
    {
      delete element._id;
      setprojectsall([element]);
    }
  }

}


 
async function slidechanger()
{
  mainimg.src = projectsall[0].images[currentslide];
  //-------------------------
  const amouts = document.getElementsByClassName("projectpage-imagesandvideos-amout-div");
  for (let index = 0; index < amouts.length; index++) {
    const element = amouts[index];
    element.style.background = "white";
    element.style.bottom = "10%";
    if(index == currentslide)
    {
      element.style.background = "#FFB400";
      element.style.bottom = "25%";
    }
  }
}
window.addEventListener("click",function(e){
  if(e.target.id == "projectsliderleftbutton")
  {
    if(currentslide > 0)
    {
      currentslide = currentslide-1;
      //console.log(currentslide);
      slidechanger();
    }
  }
  if(e.target.id == "projectsliderrightbutton")
  {
    if(currentslide < projectsall[0].images.length - 1)
    {
      currentslide = currentslide+1;
      //console.log(currentslide);
      slidechanger();
    }
  }
})



  return (
    <div className='projectpage-main'>
      <div className='projectpage-slider'>
        <div className='projectpage-imagesandvideos'>
          <ion-icon id="projectsliderleftbutton" name="chevron-back"></ion-icon>
          <img id='mainimg' src={projectsall[0].images[0]} alt='resim'></img>
          <div className='projectpage-imagesandvideos-amout'>
            {projectsall[0].images.map((imgs,index)=>{
              return(
                <div key={index} className='projectpage-imagesandvideos-amout-div'></div>
              )
            })}
          </div>
          <ion-icon id="projectsliderrightbutton" name="chevron-forward"></ion-icon>
        </div>
      </div>
      <div className='projectpage-tags'>
            {projectsall[0].tags.map((tagss)=>{
              return(
                <p>#{tagss}</p>
              )
            })}
            <p id='projectpagedateandtime'>{projectsall[0].dateandtime}</p>
      </div>
      <div className='projectpage-aboutproject'>
            <h1>{projectsall[0].title}</h1>
            <p><ion-icon name="return-down-forward-outline"></ion-icon>{projectsall[0].longtext}</p>
      </div>
      
    </div>
  )
}
