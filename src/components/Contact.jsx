import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div className='container' id='contact'>
      <h1>Contact Me</h1>
      <div className="contact-icon">
        <a href='https://www.instagram.com/_mayank__world/' target='_blank' className="items">
          <FaInstagramSquare className='icons'/>
        </a>
        <a href='https://www.linkedin.com/in/mayank-rajoriya-855184217/'
        target='_blank' className="items">
          <CiLinkedin className='icons'/>
        </a>
        <a href='https://github.com/mayankrajoriya' target='_blank' className="items">
          <FaSquareGithub className='icons'/>
        </a>
        <a href="https://www.facebook.com/mayank1rajoriya" target='_blank' className="items">
          <FaFacebookF className='icons'/>

        </a>
        <a href="mailto:mayank601665@gmail.com" target='_blank'  className="items">
          <HiOutlineMail className='icons'/>
        </a>
      </div>
    </div>
  )
}

export default Contact