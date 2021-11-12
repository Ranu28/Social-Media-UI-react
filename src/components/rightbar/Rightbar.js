import React from 'react'
import './rightbar.css'
import RightbarFriends from './RightbarFriends'
import { Users } from '../../dummyData'
import RightbarProfileFollowing from './RightbarProfileFollowing'

export default function Rightbar({profile}) {

    const HomeRightBar = () =>{
        return(
            <>
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
            </>
        )
    }

    const ProileRightBar = () => {
        return(
            <>
            <h4 className="rightbarTitle2">
                User Information Title
            </h4>
            <div className="rightbarInfo">
                <div className="rightbarInoItem">
                    <span className="rightbarInfoKey">City :</span>
                    <span className="rightbarInfoValue">New York</span>
                </div>
                <div className="rightbarInoItem">
                    <span className="rightbarInfoKey">From :</span>
                    <span className="rightbarInfoValue">Sri Lanka</span>
                </div>
                <div className="rightbarInoItem">
                    <span className="rightbarInfoKey">Relationship :</span>
                    <span className="rightbarInfoValue">Single</span>
                
                </div>
            </div>
            <h4 className="rightbarTitle2">
                User Friends
            </h4>
            <div className="rightbarFollowings">
            {Users.map((user)=>(
                <RightbarProfileFollowing key={user.id} users={user} />
            ))}
            </div>
            </>
        )
    }
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
               {(profile ? <ProileRightBar /> : <HomeRightBar/>)}             
               
            </div>
        </div>
    )
}



