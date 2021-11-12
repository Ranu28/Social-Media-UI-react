import React from 'react';
import './post.css';
import { MoreVert } from '@mui/icons-material';
export default function Post() {
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/person/2.jpeg" alt="" className="postTopProfImg" />
                        <span className="postUserName">Shara Rest</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        Hey! Its my First post :)
                    </span>
                    <img src="/assets/post/1.jpeg" alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className="like" />
                        <img src="/assets/heart.png" alt="" className="like" />
                        <span className="postLikeCounter">32 peoples</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">
                            9 comments
                        </span>
                    </div>
                </div>
            
            </div>
        </div>
    )
}
