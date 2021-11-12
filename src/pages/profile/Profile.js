import React from 'react'
import Topbar from '../../components/topBar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'
import './profile.css'

export default function Profile() {
    return (
        <div>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">

                        <img src="/assets/post/3.jpeg" alt="" className="profileCoverImg" />
                        <img src="/assets/person/1.jpeg" alt="" className="profileUserImg" />

                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">
                                Ranu Pathiranage
                            </h4>
                            <span className="profileInfoDesc">
                                Hello my Friends !
                                {/* Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Facere, temporibus sequi.
                                Nesciunt quibusdam consequuntur, est itaque
                                officia voluptatibus harum? Rem numquam aut 
                                quo odio sed quos, velit fugit tempore aperiam? */}
                            </span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                    <Feed />
                    <Rightbar profile/>
                    </div>
                    
                    
                </div>
            </div>
        </div>

    )
}
