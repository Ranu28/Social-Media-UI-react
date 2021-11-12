import React from 'react'
import './rightbar.css'
import RightbarFriends from './RightbarFriends'
import { Users } from '../../dummyData'

export default function Rightbar() {
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b>3 others</b> have birthday today
                    </span>
                </div>
                    <img src="/assets/ad.png" alt="" className="rightbarAd" />
                    <h4 className="rightbarTitle">Online Friends</h4>
                    <ul className="rightbarFriendList">
                        {Users.map((user)=>(
                            <RightbarFriends key={user.id} users={user} />

                        ))}


                        
                    </ul>
            </div>
        </div>
    )
}
