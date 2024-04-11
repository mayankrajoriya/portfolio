import React, { useEffect, useRef } from "react";
import pdf from "../resume/mayank.pdf"
import hero from "./Data/hero.json";
import Typed from "typed.js"

const Home = () => {
  const typedRef=useRef(null)
  useEffect(()=>{
    const options={
      strings:["Welcome to my profile","My Name is Mayank Rajoriya","I am front-end Developer","React Developer"],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    }
    const typed=new Typed(typedRef.current,options)
    return()=>{
      typed.destroy()
    },[]
  })
  return (
    <div className="container home" id="home">
      <div className="left">
        <h1 ref={typedRef}>
        
        </h1>
        <a href={pdf} download="mayank.pdf" className="btn btn-outline-warning m-3">
          Download Resume
        </a>
      </div>
      <div className="right">
        <div className="img">
          <img src={`/assets/images/${hero.imgSrc}`} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Home;
