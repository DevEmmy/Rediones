import React from 'react'
import nav from '../Constant/nav'

function MobileBaseNav() {
  return (
    <div className='mobile_base_nav_component'>
        {
            nav.filter((item)=> item.title !== "Messages").map((item)=>{
                return(
                    <div className="mbn_icon" key={item.id}>
                        {item.icon}
                    </div>
                )
            })
        }
    </div>
  )
}

export default MobileBaseNav