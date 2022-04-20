import React, { useState, useEffect } from 'react';
import { HiOutlineSearch} from "react-icons/hi";
import nav from '../Constant/nav';
import MobileBaseNav from './MobileBaseNav';
import MobileNav from './MobileNav';

function Nav() {
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
    <>
        { width >= 500 ? 
        <div className='nav_component'>
            <div className="icon">
                Rediones
            </div>

            <div className="search_nav_section">
                <input type="text" placeholder='Search for people here' />
                <HiOutlineSearch />
            </div>

            <div className="nav_icons_items">
                { nav.map((item)=>{
                    return(
                        <div className="nav_icons_item">
                            {item.icon}
                        </div>
                    )
                })}
            </div>
        </div>
        :
        <>
         <MobileNav />
         <MobileBaseNav />
        </>
    }
    </>
  )
}

export default Nav