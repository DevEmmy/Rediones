import React from 'react'
import staticPosts from '../Constant/staticPosts'
import { AiFillMessage, AiOutlineLike, AiOutlineShareAlt } from "react-icons/ai";

function Posts() {
  return (
    <div className='posts'>
        <h3>Feeds</h3>
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
                            {post.contentImage && <img src={post.contentImage} alt="" />}
                        </div>

                        <div className="icons">
                            <div className="like_sec">
                                <AiOutlineLike />
                            </div>

                            <div className="comment_sec">
                                <AiFillMessage />
                            </div>

                            <div className="share_sec">
                                <AiOutlineShareAlt />
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Posts