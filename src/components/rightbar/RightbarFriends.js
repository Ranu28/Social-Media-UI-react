import React from 'react'
import './rightbar.css'

export default function RightbarFriends({users}) {
    return (
        
            <li className="rightbarFriend">
                            <div className="rightbarProfileImgContainer">
                                <img src={users.profilePicture} alt="" className="rightbarProfileImg" />
                                <span className="rightbarOnline"></span>
                            </div>
                            <span className="rightbarUsername">
                                {users.username}
                            </span>
                        </li>
    )
}
