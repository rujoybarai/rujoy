import React from 'react'
import { FaHtml5 } from "react-icons/fa6"
import { IoLogoCss3 } from "react-icons/io5"
import { FaJsSquare } from "react-icons/fa"
import { FaBootstrap } from "react-icons/fa"
import { FaReact } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { BiLogoVisualStudio } from "react-icons/bi"

export default function SkillSection() {
  return (
    <div  className='Skill-section'>
        <h2>Technologies I use</h2>
        <div className='Skill-box'>
            <FaHtml5 size={50}/>
            <IoLogoCss3 size={50}/>
            <FaJsSquare size={50}/>
            <FaBootstrap size={50}/>
            <FaReact size={50}/>
            <FaGithub size={50}/>
            <BiLogoVisualStudio size={50} />

            
        </div>
    </div>
  )
}
