import React from 'react'
import stories from '../Constant/staticStories'

function Stories() {
  return (
    <div className='stories_component'>
        <h1 className="stories_head_text">
            Stories
        </h1>

        <div className="main_stories">
            {
            stories.map((story)=>{
                return(
                    <div className="story" key={story.id}>
                        <img src={story.img} alt="" />
                    </div>
                )
            })
        }
        </div>

        
    </div>
  )
}

export default Stories