import React from 'react'
import { LuExternalLink } from "react-icons/lu"
import { FiGithub } from "react-icons/fi"

export default function ProjectSection() {
    const ProjectList=[{
        title:"Random-Password-Generator",
        details:"A simple and secure Random Password Generator web application built with HTML, CSS, and JavaScript.",
        tags:["HTML","CSS","JavaScript"],
        link:"https://random-password-generator-nine-tau.vercel.app/",
        gitLink:'https://github.com/rujoybarai',
    },
    {
        title:"Todo-app",
        details:"A simple Todo App built using React.js and JavaScript, allowing users to add, edit, and delete tasks with an intuitive UI.",
        tags:["JavaScript","Bootstrap"],
        link:"https://todo-app-version2.vercel.app/",
        gitLink:'https://github.com/rujoybarai',
    },
    {
        title:"Form-template",
        details:"React.js form template with customizable fields and smooth interaction — built with JavaScript.",
        tags:["JavaScript","Bootstrap"],
        link:"https://form-template-orpin.vercel.app/",
        gitLink:'https://github.com/rujoybarai',
    }


]
    console.log(ProjectList)
  return (
    <div className='project-section'>
     <h2>Project</h2>

     <div className='project-container'>
        {
            ProjectList.map((item,i) =>(
                
                <div className='project-box' key={i} >
            <h4>{item.title}</h4>
            <p style={{width:'200px'}}>{item.details}</p>
            <div className='tags'>
              {
                item.tags.map((item,i)=>(
                     <p key={i}>{item}</p>
              
                 ) )
              }
            </div>
            <div className='p-linkBox'>
                <a href={item.gitLink} target='_blank'><FiGithub/></a>
                <a href={item.link} target='_blank'><LuExternalLink/></a>
                
            </div>

        </div>
            ))
            
        }
     </div>
      

    </div>
  )
}
