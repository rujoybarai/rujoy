import React from 'react'
import { MdFacebook } from "react-icons/md"
import { BsInstagram } from "react-icons/bs"
import { FaLinkedin } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa6";

export default function ProfileLink() {
  return (
    <div className="profile-link">
        <a href="https://www.facebook.com/?ref=homescreenpwa" target='_blank'><MdFacebook  size={30} color="#1877F2" id='link'/></a>
        <a href="https://www.instagram.com/rujoy_barai/" target='_blank'><BsInstagram size={25} color=' #E1306C'  id='link' /></a>
        <a href="https://www.linkedin.com/in/rujoybarai/" target='_blank'><FaLinkedin size={25} color="  #0A66C2" id='link' /></a>
        <a href="https://github.com/rujoybarai" target='_blank'><FaGithub  size={25} color='black' /></a>
      
        
        
        
    </div>
  )
}
