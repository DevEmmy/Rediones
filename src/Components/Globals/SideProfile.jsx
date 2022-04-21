import React from 'react'
import user from '../Constant/user'

function SideProfile() {
  return (
    <div className='side_profile'>
        <div className="profile">
            <div className="cover">
              <img src={user.cover} alt="" />
            </div>

            <div className="profile_img">
              <img src={user.profileImg} alt="" />
            </div>

            <h3 className="username_title">
              {user.name}
            </h3>

            <p className="bio">
              {user.bio}
            </p>
        </div>
    </div>
  )
}

export default SideProfile