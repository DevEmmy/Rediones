import React, { useEffect, useState } from 'react'
import stories from '../Constant/staticStories'

function Stories() {
    const [ intervalCheck, setIntervalCheck ] = useState(false)
    const [ img, setImg ] = useState(null)


    const checkStatus = (image)=>{
        return(
            <div className="status_container">
                <img src={image} alt="" />
            </div>
        )
    }

    const turnStatus = ()=>{
        setTimeout(setImg(null), 3000)
    }

    useEffect(()=>{
        setTimeout(setImg(null), 30000)
    },[img])



  return (
    <div className='stories_component'>
        <h1 className="stories_head_text">
            Stories
        </h1>

        <div className="main_stories">
            {
            stories.map((story)=>{
                return(
                    <div className="story" key={story.id} onClick={()=> setImg(story.img)}>
                        <img src={story.img} alt="" />
                    </div>
                )
            })
        }
        </div>

       
            { img && 
             <div className="show_story" onClick={()=>setImg(null)}>
            <img src={img} alt="" srcset="" />
            {/* { turnStatus() } */}
            </div>
             }
        
        

        
    </div>
  )
}

export default Stories