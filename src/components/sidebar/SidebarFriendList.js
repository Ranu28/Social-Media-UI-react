import React from 'react'
import './sidebar.css'

export default function SidebarFriendList({users}) {
    return (
        <li className="sidebarFriend">
                        <img src={users.profilePicture} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">
                            {users.username}
                        </span>
        </li>
        )
}
