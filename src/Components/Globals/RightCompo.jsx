import React from 'react'
import stories from '../Constant/staticStories'

function RightCompo() {
  return (
    <div className='right_compo'>
        
        <div className="trending">
          <h3>Trending Feeds</h3>
          
          <div className="trending_container">
            {
              stories.map((i)=>{
                return(
                  <div className="trend" key={i.id}>
                    <img src={i.img} alt="" />
                  </div>
                )
              })
            }
          </div>
        </div>

        
    </div>
  )
}

export default RightCompo