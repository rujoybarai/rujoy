import React from 'react'
import ProfilePic from './ProfilePic'
import ProfileDetails from './ProfileDetails'



const Profile  = () => {

  return (
    <div className="profile" >

        <div className="profile-card">
      
            <ProfilePic />
            <ProfileDetails  />

          

        </div>

    </div>
  )
}
export default Profile;