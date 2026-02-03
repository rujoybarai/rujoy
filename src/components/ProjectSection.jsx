import React from 'react'
import { LuExternalLink } from "react-icons/lu"
import { FiGithub } from "react-icons/fi"
import { motion } from 'framer-motion'

export default function ProjectSection() {
    const ProjectList=[{
        title:"Random-Password-Generator",
        details:"A simple and secure Random Password Generator web application built with HTML, CSS, and JavaScript.",
        tags:["HTML","CSS","JavaScript"],
        link:"https://random-password-generator-nine-tau.vercel.app/",
        gitLink:'https://github.com/rujoybarai',
        color:'rgba(0, 255, 115, 0.87)',
    },
    {
        title:"Todo-app",
        details:"A simple Todo App built using React.js and JavaScript, allowing users to add, edit, and delete tasks with an intuitive UI.",
        tags:["React","Bootstrap"],
        link:"https://todo-app-version2.vercel.app/",
        gitLink:'https://github.com/rujoybarai',
        color:'rgba(0, 247, 255, 0.87)',
    },
    {
        title:"Form-template",
        details:"React.js form template with customizable fields and smooth interaction — built with JavaScript.",
        tags:["React","Bootstrap"],
        link:"https://form-template-orpin.vercel.app/",
        gitLink:'https://github.com/rujoybarai',
        color:'rgba(230, 0, 255, 0.87)',
    },
      {
        title:"CGPA Calculator",
        details:"A simple web app to quickly calculate GPA and CGPA using course credits and grades.",
        tags:["React","Bootstrap"],
        link:"https://cgpa-calculator-lemon-seven.vercel.app/",
        gitLink:'https://github.com/rujoybarai',
        color:'rgba(255, 0, 136, 0.87)',
    }



]
   
  return (
    <div className='project-section'>
     <h2>Project</h2>

     <div className='project-container'>
        {
            ProjectList.map((item,i) =>(
                
                <motion.div className='project-box' key={i} 
                  initial={{opacity:0}}
                  whileHover={{
                  scale: 1.15,
                  boxShadow: "0px 0px 30px  rgba(134, 0, 230, 0.82)",
                  }}
                  transition={{ duration: 0.3 }}
                  whileInView={{ opacity:1,transition:{duration:1.5}}}
                 
                 style={{backgroundColor:item.color}}
                >
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

        </motion.div>
            ))
            
        }
     </div>
      

    </div>
  )
}
