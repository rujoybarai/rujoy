import React from 'react'
import { MdFacebook } from "react-icons/md"
import { BsInstagram } from "react-icons/bs"
import { FaLinkedin } from "react-icons/fa6"
import { FaWhatsapp } from "react-icons/fa6"

export default function ProfileLink() {
  return (
    <div className="profile-link">
        <a href="https://www.facebook.com/?ref=homescreenpwa" target='_blank'><MdFacebook  size={30} color="#1877F2" id='link'/></a>
        <a href="https://www.instagram.com/rujoy_barai/" target='_blank'><BsInstagram size={25} color=' #E1306C'  id='link' /></a>
        <a href="https://www.linkedin.com/in/rujoybarai/" target='_blank'><FaLinkedin size={25} color="  #0A66C2" id='link' /></a>
        <a href="" target='_blank'><FaWhatsapp size={25} color=" #21c95e"  id='link'/></a>
      
        
        
        
    </div>
  )
}
