import React, { useState, useEffect } from 'react'
import Nav from '../Globals/Nav'
import RightCompo from '../Globals/RightCompo'
import SideProfile from '../Globals/SideProfile'
import Stories from '../Globals/Stories'
import Posts from './Posts'

function Main() {
  let [width, setWidth] = useState(window.innerWidth)

  const setSize = ()=>{
      setWidth(window.innerWidth)
      console.log(width)
  }
  useEffect(() => {
   window.addEventListener('resize', setSize)
   return ()=>{ 
       console.log(width)
      window.removeEventListener('resize', setSize)
   }
  
  }, []);

  return (
    <div className='main_component'>
        <Nav />

        { width <= 500 && <><Stories /><Posts/></>}
        
        

      {
        width >= 500 && <div className="main_division">
            <SideProfile />
            <div>
              <Stories />
              <Posts />
            </div>  
            <RightCompo />
        </div>
      }
        
        
    </div>
  )
}

export default Main