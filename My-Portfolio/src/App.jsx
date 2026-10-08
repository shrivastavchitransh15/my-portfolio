import Navbar from "./assets/components/Navbar";
import ParticleBackground from "./assets/components/Particlebackground";
import About from "./assets/section/About";
import Home from "./assets/section/Home";
import Skills from "./assets/section/Skills";
import Project from "./assets/section/Project";
import Testimonial from "./assets/section/Testimonials";
import Contact from "./assets/section/Contact";
import Footer from "./assets/section/Footer";
import CustomCursor from "./assets/components/CustomCursor";
import React from "react";
import IntoAnimation from "./assets/components/introAnimation";

export default function app (){
  const [introDone, setIntroDone] = React.useState(false);
  return (
<>
{!introDone && <IntoAnimation onFinish={() => setIntroDone(true)} />}

{introDone && (
<div className="relative gradient text-white">
  <CustomCursor/>
{/*<ParticleBackground/>*/}


<Navbar/> 
<Home/>
<About/>
<Skills/>
<Project/>
<Testimonial/>
<Contact/>
<Footer/>


</div>
)}
</>

  )
}