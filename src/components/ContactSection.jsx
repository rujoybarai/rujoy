import React from 'react'
import { forwardRef } from 'react'

export default function ContactSection({ref}) {
  return (
    <div className='Contact-section' ref={ref}>
      <div className="ContactBox">
        <h2>Contact here</h2>
        <form action="" className='form'>
            <div className='Line'>
            <label htmlFor="" id='in-title' style={{top:'30px', left:'20px'}}>Name</label>
            <input type="Name" placeholder='Enter your name'  />
            </div>
                <div className='Line'>
            <label htmlFor="" id='in-title' style={{top:'100px', left:'20px'}}>Email</label>
            <input type="Email" placeholder='Enter your email'  />
            </div>
            <div className='Line'>
            <label htmlFor="" id='in-title' style={{top:'170px', left:'20px'}}>Message</label>
            <textarea type="text" placeholder='Enter your message'  />
            
            </div>
            <button type='Submit'>Send</button>
        </form>
      </div>
    </div>
  )
}
