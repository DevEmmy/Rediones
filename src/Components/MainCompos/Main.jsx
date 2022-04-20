import React from 'react'
import Nav from '../Globals/Nav'
import Stories from '../Globals/Stories'
import Posts from './Posts'

function Main() {
  return (
    <div className='main_component'>
        <Nav />
        <Stories />
        <Posts />

        {/* <div className="main_division">

        </div> */}
        
    </div>
  )
}

export default Main