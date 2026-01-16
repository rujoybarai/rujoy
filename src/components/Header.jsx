import React from 'react'



export default function Header({scrollToContact}) {

  return (
    <div className="header">
        <div className="Logo">
            <h2>Rujoy......</h2>
        </div>
        <ul className="nav-list">
            <li><a htmlHref='/'>Home</a></li>
            <li><a onClick={scrollToContact} >Contact Me</a></li>
        </ul>
    </div>
  )
}
