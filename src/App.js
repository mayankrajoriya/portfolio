
import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Navbar from "./components/navbar";
import Contact from "./components/Contact";
import "./index.css"
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

function App() {
useEffect(()=>{
  Aos.init();
},[])
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Contact/> 
     </>
  );
}

export default App;
