import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage"
import Contact from "./Components/Contact/Contact"
import Projects from "./Components/Projects/Projects"
import About from "./Components/About/About"
import AOS from 'aos'



function App() {


  window.addEventListener("mousemove",cursorfun)
  function cursorfun(event) {

    //console.log("x:" + event.x + "y:" + event.y);
    const x = event.x;
    const y = event.y;
    const cursor = document.querySelector("#cursor");
    const cursor2 = document.querySelector("#cursor2");

    cursor.setAttribute("style", "top:" + (y-5) + "px" +";"+ "left:" + (x-5) + "px" );
    cursor2.setAttribute("style", "top:" + (y-15) + "px; left:" + (x-15) + "px;" );

    if(event.target.id == "projects-card")
    {
      cursor.setAttribute("style", "top:" + (y-40) + "px" +";"+ "left:" + (x-40) + "px" + ";" + "width:80px;height:80px; opacity:.5;" );
    }

    if(event.target.className == "tags")
    {
      cursor.setAttribute("style",  "top:" + (y-40) + "px" +";"+ "left:" + (x-40) + "px" + ";" + "width:80px;height:80px; opacity:.5;" );
    }
    if(event.target.className == "allbuttons")
    {
      cursor.setAttribute("style", "top:" + (y-40) + "px" +";"+ "left:" + (x-40) + "px" + ";" + "width:80px;height:80px; opacity:.5;" );
    }
  }

  AOS.init()


  return (
    <div className="App">
      <div id="cursor" className="cursor"></div>
      <div id="cursor2" className="cursor2"></div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>
    </div>
  );
}

export default App;
