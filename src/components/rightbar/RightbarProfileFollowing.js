import React from 'react'
import './rightbar.css'

export default function RightbarProfileFollowing({users}) {
    console.log(users)
    return (
        <div className="rightbarFollowing">
                    <img src={users.profilePicture} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">
                        {users.username}
                    </span>
                </div>
    )
}
