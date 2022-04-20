import React from 'react';
import User from './User';
import { HiOutlineMail} from "react-icons/hi";

function MobileNav() {
  return (
    <div className='mobile_nav_component'>
        <User />

        <div className="icon">
            Rediones
        </div>

        <HiOutlineMail />
    </div>
  )
}

export default MobileNav