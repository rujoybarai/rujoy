import React from 'react'
import profilePic from '../assets/profile.jpg';

export default function ProfilePic() {
  return (
    <div className="profile-pic">
      <div className="pic-card">
       <div className="pic-circle">
        <img src={profilePic} alt="Profile" />

       </div>
      </div>
        
      
    </div>
  )
}
