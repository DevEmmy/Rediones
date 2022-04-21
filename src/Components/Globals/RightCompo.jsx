import React from 'react'
import otherTools from '../Constant/otherTools'
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

        <div className="other_tools">
          {
            otherTools.map((i)=>{
              return(
                <div key={i.id} className="tools">
                  {i.title}
                </div>
              )
            })
          }
        </div>


    </div>
  )
}

export default RightCompo