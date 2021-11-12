import React from 'react';
import './post.css';
import { MoreVert } from '@mui/icons-material';
import { Users } from '../../dummyData';

export default function Post({post}) {

    const [like, setLike] = React.useState(post.like);
    const [isLiked, setIsLiked] = React.useState(false);
    
    const likeHandler=()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter(u=>u.id===post.userId)[0].profilePicture} alt="" className="postTopProfImg" />
                        <span className="postUserName">{Users.filter(u=>u.id===post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        {post?.desc}
                    </span>
                    <img src={post?.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className="like" onClick={likeHandler}/>
                        <img src="/assets/heart.png" alt="" className="like" onClick={likeHandler}/>
                        <span className="postLikeCounter">{like} peoples likes</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">
                            {post?.comment} comments
                        </span>
                    </div>
                </div>
            
            </div>
        </div>
    )
}
