import React from 'react'
import staticPosts from '../Constant/staticPosts'

function Posts() {
  return (
    <div className='posts'>
        {
            staticPosts.map((post)=>{
                return(
                    <div key={post.id} className="post">
                        <div className="post_head_content">
                            { post.image && <img src={post.image} alt="" />}

                            <div className="post_author_et_date">
                                <h3>{post.author}</h3>
                                <p>{post.date}</p>
                            </div>
                        </div>

                        <div className="post_content">
                            <p>{post.content}</p>
                            <img src={post.image} alt="" />
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Posts